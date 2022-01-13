import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-two',
  templateUrl: './dialog-two.component.html',
  styleUrls: ['./dialog-two.component.scss']
})
export class DialogTwoComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DialogTwoComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
}

