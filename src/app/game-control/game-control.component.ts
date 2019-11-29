import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() startEvent= new EventEmitter;
  constructor() { }
count= 0;
  ngOnInit() {
  }

  startGame(){
    this.interval = setInterval(()=> { 
      this.startEvent.emit(this.count + 1);
      this.count++;
     }, 1000);
  }

  stopGame(){
    clearInterval(this.interval);
    console.log("event cleared");
    
  }

}
