import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
  <div *ngFor="let color of colors; index as i"> 
    <h2>{{i}} {{color}}</h2>
  </div>
  <!-- first as f, last as l, odd as o, even as e also works -->
  `,
  styles:[``]
})
export class NgForComponent implements OnInit {

  colors = ["red", "blue", "green", "yellow"];
  constructor() { }

  ngOnInit() {
  }

}
