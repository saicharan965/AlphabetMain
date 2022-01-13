import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-for-login',
  templateUrl: './dialog-for-login.component.html',
  styleUrls: ['./dialog-for-login.component.scss']
})
export class DialogForLoginComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DialogForLoginComponent>) { }

  ngOnInit(): void {
  }


  close(){
    this.dialogRef.close();
  }
}
