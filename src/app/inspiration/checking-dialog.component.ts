import { Component, Inject  } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material'; 
import { MAT_DIALOG_DATA } from '@angular/material'


@Component({
    selector: 'app-check-dialog',
    template: `
    <h1 mat-dialog-title>Are you sure?</h1>
    <mat-dialog-content>
        You are about to add {{ passedData.formActivity }}
    </mat-dialog-content>
    <mat-dialog-actions>
        <button mat-button mat-dialog-close="Yes">Yes</button>
        <button mat-button mat-dialog-close="No">No</button> 

    </mat-dialog-actions>
    `
})

export class CheckDialogComponent {  

    constructor(public dialogRef: MatDialogRef<CheckDialogComponent>,@Inject(MAT_DIALOG_DATA) public passedData:any){}
}
