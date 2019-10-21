import { Component, OnInit } from '@angular/core';

import { FormControl , FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CheckDialogComponent } from './checking-dialog.component';
import { TravelDataService } from './travel-data.service';


import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ActivityData } from './activity.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FormDialogComponent } from './form-dialog.component';


import { from } from 'rxjs';
import { DeletingDialogComponent } from './deleting-dialog.component';




@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {

  tripItem:ActivityData;
  fireBasePlacesToVisit:Observable<any>;
  activities:Observable<any>;

  itemDoc: AngularFirestoreDocument;
  item: Observable<any>;
  activities_snapshot: Observable<any>;

  travelJourneys:Observable<any>;
  travelJourneys_snapshot:Observable<any>;

  placesToVisit:Observable<any>;
  placesToVisit_snapshot:Observable<any>;
  all_countries: Observable<any>;
  all_places_whitin_userSel_country: any;

  userSelectedCountry:string='thailand';
  activities_userSelectedCountry: any;
  all_places_whitin_userSel_country_data: any; 
  userSelectedCountry_data: any;
  openedTab: any;
  activities_userSelectedCountry_: any;

  constructor(private dialog:MatDialog , private travelDataService: TravelDataService , private db: AngularFirestore   ) { }

  ngOnInit() {  

    this.userSelectedCountry_data = this.db.collection('countries', ref => ref.where('id', '==', this.userSelectedCountry)).valueChanges()
 
    // this.activities_userSelectedCountry = this.db.collection('activities', ref => ref.where('country', '==', this.userSelectedCountry)).valueChanges()
    // .subscribe(result =>{
    //   console.log(result)
    // }, error => {
    //   console.log(error)
    // })
 

    this.activities_userSelectedCountry_ = this.db.collection('activities', ref => ref.where('country', '==', this.userSelectedCountry)).snapshotChanges()
    .pipe(map(mappingData => {
      return mappingData.map(mapArray => {
        return {
          id: mapArray.payload.doc.id,
          ...mapArray.payload.doc.data()
        }
      })
    })
    ) 
    
    // This pipe is made to catch the error of the observable above.
    // .pipe(
    //   catchError((error) => {
    //     // it's important that we log an error here.
    //     // Otherwise you won't see an error in the console.
    //     console.error('error: ', error);
    //     return null;
    //   })
    // )
    
 
    

    this.all_places_whitin_userSel_country = this.db.collection('places', ref => ref.where('country', '==', this.userSelectedCountry)).valueChanges()
  
  }

  

  inspirationForm = new FormGroup({
    link: new FormControl(null , [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    activity: new FormControl(null , [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
  }); 

  onSwitchTab(event){
    
    let alteredlabel = event.tab.textLabel.trim().toLowerCase().replace(/ /g, '')
    // console.log(alteredlabel) 
    this.openedTab =  alteredlabel;
  }

  onSubmit(){ 
    //this pushes data to the array / db
    this.tripItem={
      "name":this.inspirationForm.value.activity,
      "url":this.inspirationForm.value.link,
      "country":this.userSelectedCountry,
      "placewithincountry":this.openedTab
    } 

    this.addDataToDatabase(this.tripItem)
  }



  addDataToDatabase(activity:ActivityData){

    //add to database collection
    this.db.collection('activities').add(activity)
    
  }

 

  updateDataToDatabase(id, name, url){

    console.log(id)

    //get clicked document
    this.itemDoc = this.db.doc(`activities/${id}`)
    this.item = this.itemDoc.valueChanges();
 

    this.tripItem={
      "id":id,
      "name":name,
      "url":url,
      "country":this.userSelectedCountry,
      "placewithincountry":this.openedTab
    } 

    console.log('item to be updated:', this.tripItem)

    //Delete from database collection
    this.itemDoc.update(this.tripItem)
  }

  addNewActivity(){
    
    let dialogRef = this.dialog.open(CheckDialogComponent, {
      data: {
        formLink:this.inspirationForm.value.link,
        formActivity:this.inspirationForm.value.activity
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`); // Pizza!
      if(result === 'Yes'){ 
        
        this.onSubmit()
      }
    });
  }

  editActivity(id,name,url){
    
    let dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        id:id,
        name:name,
        url:url
      }
    });

    dialogRef.afterClosed() 
    .subscribe(result => { 
      if(result){ 
        console.log('afterClose result: ', result.data.id , result.data.name, result.data.url)
        this.updateDataToDatabase(result.data.id , result.data.name, result.data.url)
      }else{
        //console.log(result)
      }
    });
  }

  
  


  deletingCheck(id,name,url){
    
    let dialogRef = this.dialog.open(DeletingDialogComponent, {
      data: {
        id:id,
        name:name,
        url:url
      }
    });

    dialogRef.afterClosed() 
    .subscribe(result => { 
      if(result == 'Yes'){  
        //get clicked document's id
        this.itemDoc = this.db.doc(`activities/${id}`) 

        //Delete from database collection
        this.itemDoc.delete()
      }else{
        //console.log(result)
      }
    });
  }

}
