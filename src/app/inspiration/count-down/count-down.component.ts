import { Component, OnInit } from '@angular/core'; 
import { TravelDataService } from '../travel-data.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  spinnerValue = 0;
  loaderValue = 0;
  maxLoaderValue:number;
  daysBetween:number;
  travelData = this.travelDataService.availableTravelData[0]

  constructor(private travelDataService:TravelDataService) { }

  ngOnInit() {

    this.calculateRemainingDays()

    

    const countDownInt = setInterval(() =>{  
      this.spinnerValue = this.spinnerValue + 4

      if(this.spinnerValue >= 100 ){
        clearInterval(countDownInt)
        this.startLoader()
      }
    }, 100);     
  }
  
  calculateRemainingDays(){
    const today = new Date()
    //const vacationData = new Date("November 7 , 2019 00:00:00")
    const vacationData = this.travelData.travelDepartureDay
    let miliSecondsDiff = Math.abs(vacationData.getTime() -  today.getTime())
    this.daysBetween = Math.round(miliSecondsDiff/1000/60/60/24);
    const month = 31;
    const percentage =  this.daysBetween/month;
    let percentageDecimal= (1-percentage)*100;
    this.maxLoaderValue = parseFloat(percentageDecimal.toFixed(2))

  }

  startLoader(){
    const loaderInt = setInterval(() =>{  
      this.loaderValue = this.loaderValue + 4

      if(this.loaderValue >= this.maxLoaderValue ){
        clearInterval(loaderInt) 
      }
    }, 100);
  }





}
