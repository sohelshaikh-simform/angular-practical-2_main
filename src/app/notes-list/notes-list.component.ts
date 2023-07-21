import { Component, OnInit } from '@angular/core';
import { Note, NoteService } from '../note.service';
import { Router } from '@angular/router';
import { MatDialog,MatDialogRef } from '@angular/material/dialog'
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent implements OnInit{

  notes: Note[] = [];

  constructor(public noteService: NoteService,  public dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    this.notes = this.noteService.notes;
  }

  openDialog(note: any){
    const dialogRef: MatDialogRef<ModalComponent> = this.dialog.open(ModalComponent,{
     width: '400px',
     data: note
    })

    dialogRef.afterClosed().subscribe((note: any) => {
      if (note) {
        // Update the note with the new data
        this.noteService.updateNote(note);
        this.noteService.submitUpdate()
      }
    });
 }

  addNote(): void {
    this.noteService.addNote();
  }

  deleteNote(note: any): void {
    this.noteService.deleteNote(note);
  }




}
