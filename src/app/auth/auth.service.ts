import { Subject, BehaviorSubject } from 'rxjs';


import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { UIService } from '../shared/ui.service';

@Injectable()
export class AuthService{
    authChange = new BehaviorSubject<boolean>(false);
    private user:User;
    private isAuthenticated;

    constructor(private router: Router , private afAuth:AngularFireAuth , private snackBar: MatSnackBar , private uiservice: UIService ){
        this.afAuth.authState.subscribe((auth) => { 
            if(auth != null){  
                this.authSuccesfully()
            }else{
                this.isAuthenticated = false; 
                this.authChange.next(this.isAuthenticated)
            }
            
          });
    }

    

    registerUser(authData:AuthData){
        // this.user = {
        //     email: authData.email,
        //     userId: Math.round(Math.random()*10000).toString()
        // };
        this.uiservice.loadingStateChange.next(true)
        this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then( result =>{ 
            this.authSuccesfully()
            this.uiservice.loadingStateChange.next(false)
        }).catch( error => { 
            this.uiservice.snackBarFn(error, null, 3000) 
            this.uiservice.loadingStateChange.next(false)
        })
    }

    login(authData:AuthData){
        // this.user = {
        //     email: authData.email,
        //     userId: Math.round(Math.random()*10000).toString()
        // };
        this.uiservice.loadingStateChange.next(true)
        this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then( result =>{ 
            this.authSuccesfully()
            this.uiservice.loadingStateChange.next(false)
        }).catch( error => { 
            this.uiservice.snackBarFn(error, null, 3000) 
            this.uiservice.loadingStateChange.next(false)
        }) 
    }

    logout(){  
        //this.isAuthenticated = false;
        this.afAuth.auth.signOut();
        // this.authChange.next(false);
        this.router.navigate(['/login'])
        this.uiservice.snackBarFn('Logged out succesfully', null, 3000)
    }



 

    isAuth(){
        // return this.user != null;
        //uncomment above to reset authentication
        return this.isAuthenticated;
    }

    authUnsuccesfull(){
        this.isAuthenticated = false; 
    }

    authSuccesfully(){
        this.uiservice.snackBarFn('Authenticated succesfully', null, 3000)
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/inspiration'])
    }

}