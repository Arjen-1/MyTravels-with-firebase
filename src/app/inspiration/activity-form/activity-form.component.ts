import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormControl , FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {

  @Input() passedData: any; 
  @Output() FormSubmission = new EventEmitter();
  @Output() cancelSubmission = new EventEmitter();

  currentLink
  currentId
  currentName
  constructor() { }

  ngOnInit() { 
    this.currentLink = this.passedData.url
    this.currentId = this.passedData.id
    this.currentName = this.passedData.name

    this.inspirationForm.patchValue({
      link: this.currentLink,
      activity: this.currentName
   });
  }

  inspirationForm = new FormGroup({
    link: new FormControl(this.currentLink , [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    activity: new FormControl(this.currentLink , [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
  }); 

  emitFormValues(){
    console.log('form value:', this.inspirationForm.value)
    this.FormSubmission.emit(this.inspirationForm.value)
  }

  cancel(){
    this.cancelSubmission.emit('cancelled')
  }

}
