import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {
  title = 'Angular-Interceptor';
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
    console.log('bla');
  }



  // constructor(
  //   public dialogRef: MatDialogRef<ErrorDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any) {}

}
