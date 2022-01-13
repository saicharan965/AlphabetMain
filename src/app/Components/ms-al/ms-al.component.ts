import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-ms-al',
  templateUrl: './ms-al.component.html',
  styleUrls: ['./ms-al.component.scss']
})
export class MsAlComponent implements OnInit {

  constructor(
    private msalService:MsalService
  ) { }

  ngOnInit(): void {
  }

isLoggedIn():boolean{
return this.msalService.instance.getActiveAccount() != null
}


login(){
  this.msalService.loginPopup().subscribe(
    (response:AuthenticationResult)=>
    this.msalService.instance.setActiveAccount(response.account)
  )
}


logout(){
    this.msalService.logout
}

}
