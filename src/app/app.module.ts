import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { InspirationComponent } from './inspiration/inspiration.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { CheckDialogComponent } from './inspiration/checking-dialog.component';
import { CountDownComponent } from './inspiration/count-down/count-down.component';
import { AuthService } from './auth/auth.service';
import { TravelDataService } from './inspiration/travel-data.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { UIService } from './shared/ui.service';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { FormDialogComponent } from './inspiration/form-dialog.component';
import { ActivityFormComponent } from './inspiration/activity-form/activity-form.component';
import { DeletingDialogComponent } from './inspiration/deleting-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    InspirationComponent,
    CheckDialogComponent,
    FormDialogComponent,
    DeletingDialogComponent,
    CountDownComponent,
    NavigationBarComponent,
    ActivityFormComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
    
  ],
  providers: [AuthService , TravelDataService , UIService],
  bootstrap: [AppComponent],
  entryComponents:[CheckDialogComponent, FormDialogComponent, DeletingDialogComponent]
})
export class AppModule { }
