import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule , MatIconModule, MatFormFieldModule, MatInputModule , MatToolbarModule , MatCardModule, MatProgressBarModule, MatSnackBarModule} from '@angular/material'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [],
    imports: [ CommonModule ,MatButtonModule,MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule , MatTabsModule , MatCardModule , MatDialogModule  , MatProgressSpinnerModule , MatProgressBarModule , MatSnackBarModule],
    exports: [MatButtonModule,MatIconModule, MatFormFieldModule, MatInputModule, MatToolbarModule , MatTabsModule , MatCardModule , MatDialogModule , MatProgressSpinnerModule , MatProgressBarModule , MatSnackBarModule],
    providers: [],
})

export class MaterialModule{}