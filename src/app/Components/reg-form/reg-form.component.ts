import { Router } from '@angular/router';
import { Structure } from './../../models/str';
import { SignUpService } from 'src/app/shared/sign-up.service';
import { Component, OnInit, CompilerFactory } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AbstractControl } from '@angular/forms';





interface genders {
  value: string;
}

interface classnames {
  value: string;
}





@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  regForm!: FormGroup;
  count : number =0;
  show !: boolean;


  get field() {
    return this.regForm.controls;
  }


  fieldName(val: string) {
    return this.regForm.get(val)?.invalid || this.regForm.get(val)?.untouched;
  }


  gender: genders[] = [
    { value: 'Male' },
    { value: 'Female' },
    { value: "I'd rather not say" }
  ];


  classes: classnames[] = [
    { value: 'Playschool' },
    { value: 'L.K.G' },
    { value: 'U.K.G' },
    { value: 'Class-I' },
    { value: 'Class-II' },
    { value: 'Class-III' },
    { value: 'Class-IV' },
    { value: 'Class-V' },
    { value: 'Class-VI' },
    { value: 'Class-VII' },
    { value: 'Class-VIII' },
    { value: 'Class-IX' },
    { value: 'Class-X' },

  ];


  constructor(private regFormInst: FormBuilder,
    private _userData: SignUpService,
    private _router:Router 
  ) { }

  ngOnInit(): void {
    this.regForm = this.regFormInst.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      fatherName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      motherName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      streetName: ['', [Validators.minLength(3), Validators.maxLength(25)]],
      locality: ['', [Validators.minLength(3), Validators.maxLength(25)]],
      landmark: ['', [Validators.minLength(3), Validators.maxLength(25)]],
      city: ['', [Validators.minLength(3), Validators.maxLength(25)]],
      state: ['', [Validators.minLength(3), Validators.maxLength(25)]],
      pincode: ['', [Validators.minLength(6), Validators.maxLength(6)]],
      classApply: ['', [Validators.required]],
      tAndc: [true, [Validators.required]],
      userName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      cnfPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
    })
  }

  //   saveData(): any{
  //     debugger;
  // this.regFormValues =  JSON.stringify(this.regForm.value);
  // this._userData.saveData(this.regFormValues).subscribe(
  //   (response)=>console.log(response),
  // )
  //   }
  saveData(): any {
    debugger;

    let regFormValues:any=new Structure();

    regFormValues=this.regForm.value;
    // this.regFormValues =  JSON.stringify(this.regForm.value);

    this._userData.postData(regFormValues).subscribe(
      (response) => console.log(response)
    )
this._router.navigate(['/welcome'])

  }

  terms():any{
    this.count++;
    if(this.count % 2){
      this.show=true;
    }
    else{
      this.show=false;
    }
  }

}
