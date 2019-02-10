import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  public message = "Welcome to angular!!";
  public name = "Romit";
  public person = {
    "name" : "Romit Bhandari",
    "Address" : "bangalore"
  };

  public date = new Date();
  
  ngOnInit() {
  }

}
