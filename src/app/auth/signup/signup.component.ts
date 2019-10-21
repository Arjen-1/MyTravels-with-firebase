import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  signupForm = new FormGroup({
    firstName: new FormControl(null , [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    lastName: new FormControl(null , [Validators.minLength(1), Validators.maxLength(50)]),
    email: new FormControl(null , [Validators.email,Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    password: new FormControl(null , [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
  }); 

  ngOnInit() {
  }

  onSubmit(){
    this.authService.registerUser({
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    });
  }

}
