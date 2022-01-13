import { ViewProfileComponent } from './Components/view-profile/view-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesPageComponent } from './Components/branches-page/branches-page.component';
import { FacilitiesPageComponent } from './Components/facilities-page/facilities-page.component';
import { GalleryPageComponent } from './Components/gallery-page/gallery-page.component';

import { LoginFormPageComponent } from './Components/login-form-page/login-form-page.component';
import { RegFormComponent } from './Components/reg-form/reg-form.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { LoginStateGuard } from './guards/login-state.guard';

const routes: Routes = [
  {path:"welcome",component:WelcomePageComponent,canActivate:[LoginStateGuard]},
  {path:"gallery",component:GalleryPageComponent},
  {path:"branches",component:BranchesPageComponent},
  {path:"viewprofile",component:ViewProfileComponent},
  {path:"login",component:LoginFormPageComponent},
  {path:"register", component:RegFormComponent},
  { path: 'parentsCorner', loadChildren: () => import('./parents-corner/parents-corner.module').then(m => m.ParentsCornerModule) },
  { path: 'schedules', loadChildren: () => import('./schedules/schedules.module').then(m => m.SchedulesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
