import { useEffect, useState } from "react";
import { NotesList } from "./components/NotesList";
import { nanoid } from "nanoid";
import { NoteData, Priority } from "./components/Note";
import { Search } from "./components/Search";
import { Header } from "./components/Header";
import {
  fetchNotes,
  createNote,
  updateNote,
  deleteNote,
} from "./services/NoteService";

const App = () => {
  // const [notes, setNotes] = useState([
  //   {
  //     id: nanoid(),
  //     text: "This is my first note!",
  //     priority: Priority.Low,
  //     date: "14/11/2025",
  //   },
  //   {
  //     id: nanoid(),
  //     text: "This is my second note!",
  //     priority: Priority.Medium,
  //     date: "14/12/2025",
  //   },
  //   {
  //     id: nanoid(),
  //     text: "This is my third note!",
  //     priority: Priority.Medium,
  //     date: "14/11/2025",
  //   },
  //   {
  //     id: nanoid(),
  //     text: "This is my forth note!",
  //     priority: Priority.High,
  //     date: "16/11/2025",
  //   },
  // ]);
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [serachText, setSearchText] = useState("");

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const data = await fetchNotes();
    setNotes(data);
  };

  const handleAddNote = async (noteData: NoteData) => {
    // setNotes([...notes, data]);
    await createNote(noteData);
    loadNotes();
  };
  const handleDeleteNote = async (id: string) => {
    // const newNotes = notes.filter((note) => note.id !== id);
    // setNotes(newNotes);
    await deleteNote(id);
    loadNotes();
  };
  const handleUpdateNote = async (noteData: NoteData) => {
    noteData.date = new Date().toLocaleDateString();
    // var newNotes = notes.map((note) =>
    //   note.id === data.id ? { ...note, ...data } : note
    // );
    console.log("from app.tsx", noteData);
    await updateNote(noteData);
    loadNotes();
  };
  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <div className="container">
      <Header />
      <Search handleSearch={handleSearch} />
      <NotesList
        notes={notes.filter((note) => note.text.includes(serachText))}
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
        handleUpdateNote={handleUpdateNote}
      />
    </div>
  );
};

export default App;
