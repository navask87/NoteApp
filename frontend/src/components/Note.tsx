import React, { useState, FormEvent } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PrioritySelector } from "./PrioritySelector";
import { GrUpdate } from "react-icons/gr";

export interface NoteData {
  id: string;
  text: string;
  date: string;
  priority: Priority;
}
export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

interface Noteprop {
  data: NoteData;
  handleDeleteNote: (id: string) => void;
  handleUpdateNote: (data: NoteData) => void;
}

const priorityColors: Record<NoteData["priority"], string> = {
  Low: "#d4edda",
  Medium: "#fff3cd",
  High: "#f8d7da",
};

export const Note = ({
  data,
  handleDeleteNote,
  handleUpdateNote,
}: Noteprop) => {
  const [priority, setPriority] = useState<Priority>(data.priority);
  const [text, setText] = useState(data.text);

  const handleSetPriority = (priority: Priority) => {
    setPriority(priority);
  };

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleUpdateNote({ ...data, priority, text });
  };

  return (
    <form
      className="note"
      style={{ backgroundColor: priorityColors[priority] }}
      onSubmit={onSubmit}
    >
      <textarea
        rows={8}
        cols={10}
        style={{ backgroundColor: priorityColors[priority] }}
        value={text}
        onChange={onTextChange}
      />
      <PrioritySelector
        priority={priority}
        handleSetPriority={handleSetPriority}
      />
      <div className="note-footer">
        <small>{data.date}</small>
        <div className="action-icons">
          <button
            type="submit"
            title="Save changes"
            className="update-icon-button"
          >
            {GrUpdate({ className: "update-icon", size: "0.9em" })}
          </button>
          <span onClick={() => handleDeleteNote(data.id)} title="Delete">
            {MdDeleteForever({ className: "delete-icon", size: "1.3em" })}
          </span>
        </div>
      </div>
    </form>
  );
};
