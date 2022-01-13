import { DialogThreeComponent } from './../dialog-three/dialog-three.component';
import { DialogTwoComponent } from './../dialog-two/dialog-two.component';
import { WrongPassDialogComponent } from './../wrong-pass-dialog/wrong-pass-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  constructor(public _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dialogOne(){
        this._dialog.open(WrongPassDialogComponent,{ disableClose: true, data:{isDialogClosed:true}})
  }

  dialogTwo(){
this._dialog.open(DialogTwoComponent,{ width: '250px',height:'250px',hasBackdrop: false})
  }
  dialogThree(){
this._dialog.open(DialogThreeComponent,{position:{top:'100px',right:'250px'}})
    
  }
}
