import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { MatSnackBar } from '@angular/material';

@Injectable()
export class UIService {

    constructor(private snackBar:MatSnackBar){}
  
    loadingStateChange = new Subject<boolean>();

    snackBarFn( message, actions, duration){
        this.snackBar.open(message, actions, {
            duration:duration
        })
    }
    
}