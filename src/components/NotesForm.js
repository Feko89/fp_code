import React, { useState, useEffect } from "react";

const NotesForm = () => {
    const [note, setNote] = useState(""); // Text nového poznámky
    const [notes, setNotes] = useState([]); // Zoznam všetkých poznámok
    const [error, setError] = useState("");

    // Funkcia na získanie všetkých poznámok z databázy
    const fetchNotes = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("Musíte byť prihlásený na zobrazenie poznámok.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/data", {
                headers: {
                    Authorization: `Bearer ${token}`, // Odosielame token v hlavičke
                },
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

    // Funkcia na odoslanie poznámky na server
    const submitNote = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        if (!token) {
            setError("Musíte byť prihlásený na pridanie poznámky.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/add-note", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ note }),
            });

            if (response.ok) {
                setNote(""); // Vyčistenie vstupu
                fetchNotes(); // Obnovenie zoznamu poznámok
                setError("");
            } else {
                setError("Chyba pri pridávaní poznámky.");
            }
        } catch (error) {
            console.error("Error submitting note:", error);
            setError("Chyba pri pridávaní poznámky.");
        }
    };

    // Načítanie poznámok pri prvom zobrazení komponentu
    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div>
            <h1>Pridaj poznámky</h1>
            <form onSubmit={submitNote}>
                <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Napíšte poznámku"
                />
                <button type="submit">Pridať</button>
            </form>
            {error && <p className="text-danger">{error}</p>}
            <h2>Poznámky:</h2>
            <ul>
                {notes.map((item, index) => (
                    <li key={index}>{item.note}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotesForm;
