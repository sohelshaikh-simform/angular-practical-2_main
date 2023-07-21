import { Component, Inject, OnInit } from '@angular/core';
import { Note, NoteService } from '../note.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  note: any;

  constructor(
    public noteService: NoteService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.note = { ...data };
  }

  ngOnInit(): void {}

  submitUpdate(): void {
    // Pass the updated note back to the parent component
    this.dialogRef.close(this.note);
  }
}
