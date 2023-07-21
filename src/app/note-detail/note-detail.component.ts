import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css'],
})
export class NoteDetailComponent implements OnInit {
  note: any;

  constructor(private route: ActivatedRoute ,private noteService: NoteService) {}


  notes = this.noteService.notes;

  ngOnInit() {
    const noteId = this.route.snapshot.paramMap.get('id');
    if (noteId !== null) {
      this.note = this.getNoteById(noteId);
    } else {
      console.log('ID is null');
    }
  }

  getNoteById(id: string) {
    return this.notes.find((note) => note.id === id);
  }

  // Simulated notes array as a data source
}
