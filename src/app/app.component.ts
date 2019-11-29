import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gamecontrol';
currentNumber;
  numberArray: any= [];
  OnEventStart(intervalValue){
    // console.log("event strated");
    // console.log("interval Value is :", intervalValue);
    this.currentNumber= intervalValue;
    this.numberArray.push(intervalValue);
    console.log("numberArray: ", this.numberArray);
    
  }
}
