import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { error } from '@angular/compiler/src/util';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalstorageService } from '../../services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
loginFormGroup!: FormGroup;
isSubmitted=false
authError=false
authMessage="Email or Password are wrong"
  constructor(private formBuilder:FormBuilder,private auth:AuthService,private localstorageService:LocalstorageService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._initLoginForm();
  }
  private _initLoginForm(){
    this.loginFormGroup=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  get loginForm(){
    return this.loginFormGroup.controls;
  }

  onSubmit(){
    this.isSubmitted=true
    if(this.loginFormGroup.invalid){ return;}

    this.auth.login(this.loginForm['email'].value,this.loginForm['password'].value).subscribe((user)=>{
      console.log(user);
      this.authError=false
      this.localstorageService.setToken(user.token)
      this.router.navigate(['/'])

    },(error:HttpErrorResponse)=>{
      console.log(error)
      this.authError=true
        if (error.status != 400) {
          this.authMessage = 'Server error, please try again later';
        } else {
          this.authMessage = 'Email or password are wrong';
        }    })
  }

}
