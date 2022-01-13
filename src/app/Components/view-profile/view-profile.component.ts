import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  apiResponse!: string;




  constructor(private _msalService: MsalService,
    private httpclient: HttpClient) { }

  ngOnInit(): void {
  }


  isLoggedIn(): boolean {
    return this._msalService.instance.getActiveAccount() != null
  }
  showProfile() {
    this.httpclient.get("https://graph.microsoft-ppe.com/v1.0/me").subscribe(
      (response) => {
        this.apiResponse = JSON.stringify(response)
      }
    )
  }
}
