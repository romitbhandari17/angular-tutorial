import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template :`

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">Red Color</div>
    <div *ngSwitchCase="'blue'">Blue Color</div>
    <div *ngSwitchCase="'green'">Green Color</div>
    <div *ngSwitchDefault>Default Color</div>
  </div>

  `,
  styles : [``]
})
export class NgSwitchComponent implements OnInit {

  color = "orange";
  constructor() { }

  ngOnInit() {
  }

}
