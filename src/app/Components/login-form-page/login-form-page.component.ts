import { HttpClient } from '@angular/common/http';
import { DialogForLoginComponent } from './../dialog-for-login/dialog-for-login.component';
import { SignUpService } from 'src/app/shared/sign-up.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Structure } from '../../models/str';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

// function strongPassword(pwrd:AbstractControl):{ [key:string]:boolean}| null{
// if
// }


@Component({
  selector: 'app-login-form-page',
  templateUrl: './login-form-page.component.html',
  styleUrls: ['./login-form-page.component.scss']
})
export class LoginFormPageComponent implements OnInit {

  usernameValue: string = "";
  passwordValue: string = "";
  loginForm!: FormGroup;
  returnData: any;
  wrongUsername: boolean = false
  wrongPassword: boolean = false

  userDetailsArray: any;




  constructor(private loginFormInst: FormBuilder,
    public getUserData: SignUpService,
    private _router: Router,
    public _dialog: MatDialog,
    private _msalService: MsalService,
  ) { }

  ngOnInit(): void {

    this.loginForm = this.loginFormInst.group({
      username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      checkbox: [true]
    })
    //   This method is using FormControl but we used FormBuilder above
    // this.loginForm = new FormGroup({
    //   username: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    //   password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    //   checkbox: new FormControl(true),
    // })
  }






  isLoggedIn(): boolean {
    return this._msalService.instance.getActiveAccount() != null
  }

  login() {
    this._msalService.loginPopup().subscribe((response: AuthenticationResult) =>
      this._msalService.instance.setActiveAccount(response.account))
    this._router.navigate(['/welcome'])

  }

  logout() {
    this._msalService.logout();
  }





  onLogin() {
    if (this.loginForm.valid) {
    }
    else {
      debugger
      const dialogRef = this._dialog.open(DialogForLoginComponent);
      //   this.wrongPassword= true,
      //    this.wrongUsername = true 
    };
    // debugger;
    this.usernameValue = this.loginForm.get('username')?.value;
    this.passwordValue = this.loginForm.get('password')?.value;

    this.getUserData.getData().subscribe(
      (data) => {
        // debugger;
        console.log(data);
        // this.returnData=data;
        // console.log(typeof(this.returnData.MhItqRIqp5wJRRfUewi));

      }
    )


  }

}
