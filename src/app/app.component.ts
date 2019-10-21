import { Component, OnInit , OnDestroy} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,OnDestroy{
  constructor(private authService:AuthService){}
  
  isAuth:boolean;
  authSubscription: Subscription;

  ngOnInit(): void {
    this.authSubscription =  this.authService.authChange.subscribe(authStatus => {
      this.isAuth =  authStatus; 
    });
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe()
  }
  
}
