import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-three',
  templateUrl: './dialog-three.component.html',
  styleUrls: ['./dialog-three.component.scss']
})
export class DialogThreeComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DialogThreeComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
}
