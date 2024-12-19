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

  // Načítanie poznámok z databázy
  const fetchNotes = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Musíte byť prihlásený na zobrazenie poznámok.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/data", {
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
        ? `http://localhost:5000/update-note/${editingNoteId}`
        : "http://localhost:5000/add-note";
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
      const response = await fetch(`http://localhost:5000/delete-note/${id}`, {
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

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="notes-container">
      <h1>{editingNoteId ? "Uprav poznámku" : "Pridaj poznámku"}</h1>
      <form className="notes-form" onSubmit={submitNote}>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Názov témy"
        />
        <textarea
          className="form-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Píš poznámky v Markdown formáte..."
        />
        <button className="form-button" type="submit">
          {editingNoteId ? "Upraviť poznámku" : "Pridať poznámku"}
        </button>
        {editingNoteId && (
          <button
            className="form-button cancel-button"
            type="button"
            onClick={() => {
              setTitle("");
              setContent("");
              setEditingNoteId(null);
            }}
          >
            Zrušiť úpravy
          </button>
        )}
      </form>
      {error && <p className="text-danger">{error}</p>}
      <h2>Poznámky:</h2>
      <ul className="notes-list">
        {notes.map((note) => (
          <li className="note-item" key={note._id}>
            <h3>{note.title}</h3>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.content}</ReactMarkdown>
            <div className="note-actions">
              <button
                className="form-button edit-button"
                onClick={() => prepareToEditNote(note)}
              >
                Edit
              </button>
              <button
                className="form-button delete-button"
                onClick={() => deleteNote(note._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesForm;
