import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!input.trim()) return;
    setNotes([...notes, input]);
    setInput("");
  };

  const deleteNote = (i) => {
    setNotes(notes.filter((_, index) => index !== i));
  };

  return (
    <div className="card">
      <h2>📒 Notes</h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write note..."
        rows="4"
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.ctrlKey) {
            addNote();
          }
        }}
      />

      <br />
      <button onClick={addNote}>Save</button>

      <div>
        {notes.map((note, i) => (
          <div
            key={i}
            style={{
              margin: "10px",
              padding: "10px",
              background: "#2a2a2a",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {note}

            <button onClick={() => deleteNote(i)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;