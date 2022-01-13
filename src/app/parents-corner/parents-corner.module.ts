import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsCornerRoutingModule } from './parents-corner-routing.module';
import { ParentsCornerComponent } from './parents-corner.component';


@NgModule({
  declarations: [
    ParentsCornerComponent
  ],
  imports: [
    CommonModule,
    ParentsCornerRoutingModule
  ]
})
export class ParentsCornerModule { }
