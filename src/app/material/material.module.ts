import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider'
import { MatDialogModule } from '@angular/material/dialog'


const material: any[]  = [
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatIconModule,
MatDatepickerModule,
MatNativeDateModule,
MatButtonModule,
MatListModule,
MatDividerModule,
MatDialogModule
]


@NgModule({
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule { }
