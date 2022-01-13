import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private _msalService:MsalService) { }

  ngOnInit(): void {
  }


  isLoggedIn(): boolean {
    return this._msalService.instance.getActiveAccount() != null
  }

  // login() {
  //   this._msalService.loginPopup().subscribe((response: AuthenticationResult) =>
  //     this._msalService.instance.setActiveAccount(response.account))
  // }

  logout() {
    this._msalService.logout();
  }

}
