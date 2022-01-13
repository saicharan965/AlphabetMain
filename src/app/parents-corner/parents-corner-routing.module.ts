import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentsCornerComponent } from './parents-corner.component';

const routes: Routes = [{ path: '', component: ParentsCornerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsCornerRoutingModule { }
