import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy{

  
  constructor(private authService: AuthService, private uiservice : UIService) { }

  loginForm = new FormGroup({
    email: new FormControl(null , [Validators.email,Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    password: new FormControl(null , [Validators.required, Validators.minLength(1), Validators.maxLength(50)])
  }); 
  isLoading = false;
  private loadingSubs: Subscription;

  ngOnInit() {
    this.loadingSubs = this.uiservice.loadingStateChange.subscribe(data =>{
      this.isLoading = data;
    })
  }
  
  ngOnDestroy(){
    this.loadingSubs.unsubscribe()
  }


  onSubmit(){
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })
  }

}
