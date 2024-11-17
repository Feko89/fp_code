import React, { useState, useEffect } from "react";

const NotesForm = () => {
    const [note, setNote] = useState(""); // Text nového poznámky
    const [notes, setNotes] = useState([]); // Zoznam všetkých poznámok

    // Funkcia na získanie všetkých poznámok z databázy
    const fetchNotes = async () => {
        try {
            const response = await fetch("http://localhost:5000/data");
            const data = await response.json();
            setNotes(data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    // Funkcia na odoslanie poznámky na server
    const submitNote = async (e) => {
        e.preventDefault();
        if (!note) return; // Kontrola, či je poznámka prázdna

        try {
            const response = await fetch("http://localhost:5000/add-note", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ note }),
            });

            if (response.ok) {
                setNote(""); // Vyčistenie vstupu
                fetchNotes(); // Obnovenie zoznamu poznámok
            }
        } catch (error) {
            console.error("Error submitting note:", error);
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
                    placeholder="Write your note here"
                />
                <button type="submit">Pridať</button>
            </form>
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
