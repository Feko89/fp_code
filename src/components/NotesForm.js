import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./NotesForm.css";

const NotesForm = () => {
  const [title, setTitle] = useState(""); // Názov témy
  const [content, setContent] = useState(""); // Obsah v Markdown
  const [notes, setNotes] = useState([]); // Zoznam poznámok
  const [error, setError] = useState("");
  const [editingNoteId, setEditingNoteId] = useState(null); // ID poznámky, ktorú upravujeme
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedNoteForReading, setSelectedNoteForReading] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;


  // Načítanie poznámok z databázy
  const fetchNotes = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Musíte byť prihlásený na zobrazenie poznámok.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/data`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setNotes(data);
        setError("");
      } else {
        setError("Chyba pri načítaní poznámok.");
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
      setError("Chyba pri načítaní poznámok.");
    }
  };

  // Pridanie alebo úprava poznámky
  const submitNote = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Musíte byť prihlásený na pridanie poznámky.");
      return;
    }

    try {
      const endpoint = editingNoteId
        ? `${API_URL}/update-note/${editingNoteId}`
        : `${API_URL}/add-note`;
      const method = editingNoteId ? "PUT" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        setTitle(""); // Vyčisti názov
        setContent(""); // Vyčisti obsah
        setEditingNoteId(null); // Resetuj ID poznámky
        fetchNotes(); // Načítaj aktualizované poznámky
        setSuccessMessage("Poznámka bola úspešne uložená.");
        setError("");
      } else {
        setError("Chyba pri pridávaní alebo úprave poznámky.");
      }
    } catch (error) {
      console.error("Error submitting note:", error);
      setError("Chyba pri pridávaní alebo úprave poznámky.");
    }
  };

  // Príprava na úpravu poznámky
  const prepareToEditNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingNoteId(note._id);
    setSelectedNoteForReading(null);
  };

  // Odstránenie poznámky
  const deleteNote = async (id) => {
    const token = localStorage.getItem("token");
    const API_URL = process.env.REACT_APP_API_URL;


    try {
      const response = await fetch(`${API_URL}/delete-note/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        fetchNotes(); // Obnovenie zoznamu poznámok
      } else {
        console.error("Failed to delete note");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const createNewNote = () => {
    setTitle("");
    setContent("");
    setEditingNoteId(null);
    setSuccessMessage("");
    setSelectedNoteForReading(null);
  };

  // Zoradenie poznámok zostupne podľa dátumu
  const sortedNotes = [...notes].sort((a, b) => {
    // Použijeme ID ak createdAt nie je dostupný
    const dateA = a.createdAt ? new Date(a.createdAt) : new Date(parseInt(a._id.substring(0, 8), 16) * 1000);
    const dateB = b.createdAt ? new Date(b.createdAt) : new Date(parseInt(b._id.substring(0, 8), 16) * 1000);
    return dateB - dateA;
  });

  const openNoteForReading = (note) => {
    setSelectedNoteForReading(note);
    setEditingNoteId(null);
    setTitle("");
    setContent("");
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="notes-layout">
      <div className="notes-sidebar">
        <button className="new-note-button" onClick={createNewNote}>
          + Nová poznámka
        </button>
        <div className="notes-list">
          {sortedNotes.map((note) => (
            <div
              key={note._id}
              className={`note-item ${editingNoteId === note._id ? 'active' : ''} ${selectedNoteForReading?._id === note._id ? 'reading' : ''}`}
            >
              <h3>{note.title || "Bez názvu"}</h3>
              <div className="note-actions-sidebar">
                <button 
                  className={`action-button edit ${editingNoteId === note._id ? 'active' : ''}`}
                  onClick={() => prepareToEditNote(note)}
                >
                  Upraviť
                </button>
                <button 
                  className={`action-button read ${selectedNoteForReading?._id === note._id ? 'active' : ''}`}
                  onClick={() => openNoteForReading(note)}
                >
                  Čítať
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="notes-main">
        {selectedNoteForReading ? (
          <div className="note-reading-view">
            <div className="reading-header">
              <h2>{selectedNoteForReading.title}</h2>
              <div className="reading-actions">
                <button 
                  className="edit-reading-button"
                  onClick={() => prepareToEditNote(selectedNoteForReading)}
                >
                  Upraviť
                </button>
                <button 
                  className="close-reading-button"
                  onClick={() => setSelectedNoteForReading(null)}
                >
                  Zavrieť
                </button>
              </div>
            </div>
            <div className="markdown-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {selectedNoteForReading.content}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <form className="notes-form" onSubmit={submitNote}>
            <input
              type="text"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Názov poznámky"
            />
            <textarea
              className="form-textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Píš poznámky v Markdown formáte..."
            />
            <div className="uprava">
            <div className="form-actions">
              <button className="form-button" type="submit">
                {editingNoteId ? "Upraviť poznámku" : "Uložiť poznámku"}
              </button>
              {editingNoteId && (
                <button
                  className="form-button delete-button"
                  type="button"
                  onClick={() => deleteNote(editingNoteId)}
                >
                  Vymazať
                </button>
              )}
            </div>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {error && <div className="error-message">{error}</div>}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default NotesForm;
