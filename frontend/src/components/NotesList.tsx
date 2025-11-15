import { AddNote } from "./AddNote";
import { Note, NoteData } from "./Note";

interface NotesListProps {
  notes: NoteData[];
  handleAddNote: (data: NoteData) => void;
  handleDeleteNote: (id: string) => void;
  handleUpdateNote: (data: NoteData) => void;
}
export const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleUpdateNote,
}: NotesListProps) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          data={note}
          handleDeleteNote={handleDeleteNote}
          handleUpdateNote={handleUpdateNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
