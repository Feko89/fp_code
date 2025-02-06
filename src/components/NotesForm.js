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
  const [selectedNote, setSelectedNote] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
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
    setSuccessMessage("");
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Musíte byť prihlásený na pridanie poznámky.");
      return;
    }

    try {
      const endpoint = editingNoteId
        ? `${API_URL}/data/update-note/${editingNoteId}`
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
        setSuccessMessage(editingNoteId ? "Poznámka bola úspešne upravená!" : "Poznámka bola úspešne pridaná!");
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
    setEditingNoteId(note._id); // Nastav ID poznámky, ktorá sa bude upravovať
  };

  // Odstránenie poznámky
  const deleteNote = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${API_URL}/data/delete-note/${id}`, {
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
    setSelectedNote(null);
  };

  const selectNote = (note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
    setEditingNoteId(note._id);
  };

  // Zoradenie poznámok zostupne podľa dátumu
  const sortedNotes = [...notes].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="notes-container">
      <div className="notes-sidebar">
        <div className="sidebar-content">
          <button className="new-note-button" onClick={createNewNote}>
            + Nová poznámka
          </button>
          <ul className="notes-list">
            {sortedNotes.map((note) => (
              <li
                key={note._id}
                className={`note-item-sidebar ${selectedNote?._id === note._id ? 'selected' : ''}`}
                onClick={() => selectNote(note)}
              >
                <h3>{note.title || "Bez názvu"}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="notes-main-content">
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
          <div className="form-actions">
            <button className="form-button" type="submit">
              {editingNoteId ? "Upraviť poznámku" : "Uložiť poznámku"}
            </button>
            {editingNoteId && (
              <button
                className="form-button cancel-button"
                type="button"
                onClick={createNewNote}
              >
                Zrušiť úpravy
              </button>
            )}
          </div>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default NotesForm;
