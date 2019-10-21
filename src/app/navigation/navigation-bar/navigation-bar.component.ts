import { Component, OnInit , OnDestroy} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnDestroy{

  
  isAuth:boolean;
  authSubscription: Subscription;

  mobileMenuToggled:boolean=false;

  constructor(private authService:AuthService) { } 

  ngOnInit(): void {
    this.authSubscription =  this.authService.authChange.subscribe(authStatus => {
      this.isAuth =  authStatus; 
    });
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

  toggleMenu(){
    this.mobileMenuToggled = !this.mobileMenuToggled;
  }

  closeMenu(){
    this.mobileMenuToggled = false;
  }

}
