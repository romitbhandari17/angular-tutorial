import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-flow',
  template: `
    <div>
    Hello {{name}}!!
    <button (click)="fireEvent()">Emit From Child</button>
    </div>
  `,
  styles: [``]
})
export class DataFlowComponent implements OnInit {

  //@Input() public parentData;
  @Input('parentData') public name;
  @Output() public eventData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.eventData.emit('Child to Parent!!');
  }

}
