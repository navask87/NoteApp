import { ChangeEvent, FormEvent, useState } from "react";
import { NoteData, Priority } from "./Note";
import { nanoid } from "nanoid";
import { PrioritySelector } from "./PrioritySelector";

interface AddNoteProps {
  handleAddNote: (data: NoteData) => void;
}

export const AddNote = ({ handleAddNote }: AddNoteProps) => {
  const [noteText, setNoteText] = useState("");
  const [priority, setPriority] = useState<Priority>(Priority.Low);
  const charLimit = 200;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (charLimit - event.target.value.length < 0) {
      return;
    }
    setNoteText(event.target.value);
  };

  const handleSetPriority = (priority: Priority) => {
    setPriority(priority);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevent page reload

    if (noteText.trim().length === 0) {
      return; // Optional: show error message
    }

    const noteData: NoteData = {
      id: nanoid(),
      text: noteText,
      priority: priority,
      date: new Date().toLocaleDateString(),
    };

    handleAddNote(noteData);
    setNoteText("");
    setPriority(Priority.Low);
  };

  return (
    <form className="note new" onSubmit={handleSubmit}>
      <textarea
        rows={8}
        cols={10}
        placeholder="Type to add a note ..."
        value={noteText}
        onChange={handleChange}
      />
      <PrioritySelector
        priority={priority}
        handleSetPriority={handleSetPriority}
      />
      <div className="note-footer">
        <small>{charLimit - noteText.length}</small>
        <button type="submit" className="save">
          Save
        </button>
      </div>
    </form>
  );
};
