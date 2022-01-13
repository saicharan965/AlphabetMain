import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-wrong-pass-dialog',
  templateUrl: './wrong-pass-dialog.component.html',
  styleUrls: ['./wrong-pass-dialog.component.scss']
})
export class WrongPassDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<WrongPassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {isDialogClosed: boolean}
    ) { }

  ngOnInit(): void {
  }

  close(){
    console.log(this.data)
    this.dialogRef.close();
  }
}
