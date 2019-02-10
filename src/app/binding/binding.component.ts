import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-binding]',
  /*templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']*/
  template: `
    <!-- Event Binding -->
    <h2 (click)="OnClick($event)">Click on this!!</h2>
    <button (click)="greeting='This is Romit.'">Click Button!!</button>
    <div>
    {{greeting}}
    </div>
    <!-- template ref variables -->
    <input type="text" #myInput>
    <button (click)="logMessage(myInput.value)">Log</button>

    <!-- Two way binding -->
    <div>
    <input [(ngModel)]="name" type="text">
    {{name}}
    </div>
  `,
  styles : [`
  
  
  
  `]

})
export class BindingComponent implements OnInit {

  constructor() { }
  public greeting="";
  public name="";

  ngOnInit() {
  }

  OnClick(event){
    console.log(event)
    this.greeting = event.type;
  }

  logMessage(value){
    console.log(value)
  }

}
