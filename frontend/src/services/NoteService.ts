import { NoteData } from "../components/Note";

const baseUrl = "http://localhost:5245/api/notes";

export const fetchNotes = async (): Promise<NoteData[]> => {
  const res = await fetch(baseUrl);
  const data = res.json();
  console.log(data);
  return data;
};

export const createNote = async (note: NoteData): Promise<NoteData> => {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
};

export const updateNote = async (note: NoteData): Promise<void> => {
  if (!note.id) throw new Error("Note must have an id to update");
  await fetch(`${baseUrl}/${note.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  //   console.log(note);
};

export const deleteNote = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/${id}`, { method: "DELETE" });
};
