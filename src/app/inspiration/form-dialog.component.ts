import { Component, Inject, Injectable, OnInit  } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material'; 
import { MAT_DIALOG_DATA } from '@angular/material'

@Injectable()
@Component({
    selector: 'app-form-dialog',
    template: `
    <h1 mat-dialog-title>You're editing: {{this.activityDataName }} </h1> 
    <mat-dialog-content style="padding-bottom:0.5rem;">
        <app-activity-form [passedData]="activityData" (FormSubmission)='getFormValues($event)' (cancelSubmission)='cancelSubmission($event)'></app-activity-form>
    </mat-dialog-content>
    ` 
})

export class FormDialogComponent implements OnInit  { 
    

    activityData;
    newActivityData: any; 

    constructor(public formDialogRef: MatDialogRef<FormDialogComponent>,@Inject(MAT_DIALOG_DATA) public passedData:any){  
        this.activityData = this.passedData;
    } 

    ngOnInit(): void {  } 


    getFormValues(data){ 
        this.newActivityData = {
            id:this.passedData.id,
            name:data.activity,
            url:data.link
        }

        this.formDialogRef.close({event:'close',data:this.newActivityData}); 
    }

    cancelSubmission(data){
        this.formDialogRef.close();
    }
}
