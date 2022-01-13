import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAngularModule } from './material-angular/material-angular.module';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { GalleryPageComponent } from './Components/gallery-page/gallery-page.component';
import { BranchesPageComponent } from './Components/branches-page/branches-page.component';
import { FacilitiesPageComponent } from './Components/facilities-page/facilities-page.component';
import { LoginFormPageComponent } from './Components/login-form-page/login-form-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { RegFormComponent } from './Components/reg-form/reg-form.component';
import {JitCompilerFactory} from '@angular/platform-browser-dynamic';
import { DialogForLoginComponent } from './Components/dialog-for-login/dialog-for-login.component';
import { WrongPassDialogComponent } from './Components/wrong-pass-dialog/wrong-pass-dialog.component';
import { DialogTwoComponent } from './Components/dialog-two/dialog-two.component';
import { DialogThreeComponent } from './Components/dialog-three/dialog-three.component';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { ViewProfileComponent } from './Components/view-profile/view-profile.component';



export function  MSALInstanceFactory():IPublicClientApplication{
  return new PublicClientApplication ({
    auth:{
      clientId:'aa6dde2e-584e-44b0-8f4f-cbe8d6cccd6b',
      redirectUri:'http://localhost:4200/login',
    }
  })
}


export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft-ppe.com/v1.0/me', ['user.read']);

  return {
    interactionType: InteractionType.Popup,
    protectedResourceMap
  };
}


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GalleryPageComponent,
    BranchesPageComponent,
    FacilitiesPageComponent,
    LoginFormPageComponent,
    NavbarComponent,
    WelcomePageComponent,
    RegFormComponent,
    WrongPassDialogComponent,
    DialogTwoComponent,
    DialogThreeComponent,
    ViewProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    HttpClientModule,
    MsalModule
  ],
  entryComponents:[
    DialogForLoginComponent
  ],
  providers: [
    {
    provide:MSAL_INSTANCE,
    useFactory: MSALInstanceFactory
  },

  {
    provide: HTTP_INTERCEPTORS,
    useClass: MsalInterceptor,
    multi: true
  },

  {
    provide: MSAL_INTERCEPTOR_CONFIG,
    useFactory: MSALInterceptorConfigFactory
  },
  MsalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
