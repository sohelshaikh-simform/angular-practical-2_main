import { Injectable } from '@angular/core';

export interface Note {
  id: string;
  name: string;
  createdDate: Date;
  content: string;
}


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [
    {
      id: '1',
      name: 'Note 1',
      createdDate: new Date(),
      content: 'Note 1 content',
    },
    {
      id: '2',
      name: 'Note 2',
      createdDate: new Date(),
      content: 'Note 2 content',
    },
    {
      id: '3',
      name: 'Note 3',
      createdDate: new Date(),
      content: 'Note 3 content',
    },
    {
      id: '4',
      name: 'Note 4',
      createdDate: new Date(),
      content: 'Note 4 content',
    },
    {
      id: '5',
      name: 'Note 5',
      createdDate: new Date(),
      content: 'Note 5 content',
    },
  ]

  selectedNote: any = null;
  name: string = '';
  date: Date = new Date();
  note: string = '';
  updateName: string = '';
  updateDate: Date = new Date();
  updatenote: string = '';

  constructor() { }

  addNote(): void {
    const newNote = {
      id: (this.notes.length + 1).toString(),
      name: this.name,
      createdDate: this.date,
      content: this.note,
    };
    this.notes.push(newNote);
  }

  deleteNote(note: any): void {
    if (confirm('Are you sure you want to delete this note?')) {
      const index = this.notes.indexOf(note);
      if (index > -1) {
        this.notes.splice(index, 1);
      }
    }
  }
  

  updateNote(note: any): void {
    this.selectedNote = note;
    this.updateName = note.name;
    this.updateDate = new Date(note.createdDate);
    this.updatenote = note.content;
  }

  submitUpdate(): void {
    if (this.selectedNote) {
      const updatedNote: any = {
        id: this.selectedNote.id,
        name: this.updateName,
        createdDate: this.updateDate.toISOString(),
        content: this.updatenote,
      };

      // Update the note in the notes array
      const index = this.notes.findIndex((n) => n.id === this.selectedNote?.id);
      if (index > -1) {
        this.notes[index] = updatedNote;
      }

      // Clear the selected note and form fields
      this.selectedNote = null;
      this.name = '';
      this.date = new Date();
      this.note = '';
    }
  }
  
  

  handleNoteUpdated(updatedNote: any): void {
    // Add the updated note to the notes array
    this.notes.push(updatedNote);
  }

  getNotes(): Note[] {
    return this.notes;
  }



}
