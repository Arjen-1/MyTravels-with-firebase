import { Component, Inject  } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material'; 
import { MAT_DIALOG_DATA } from '@angular/material'


@Component({
    selector: 'app-deleting-dialog',
    template: `
    <h1 mat-dialog-title>Are you sure?</h1>
    <mat-dialog-content>
        You are about to delete {{ passedData.name }}
    </mat-dialog-content>
    <mat-dialog-actions>
        <button mat-button mat-dialog-close="Yes">Yes</button>
        <button mat-button mat-dialog-close="No">Cancel</button> 

    </mat-dialog-actions>
    `
})

export class DeletingDialogComponent {  

    constructor(public dialogRef: MatDialogRef<DeletingDialogComponent>,@Inject(MAT_DIALOG_DATA) public passedData:any){}
}
