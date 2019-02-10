import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
    <h2 *ngIf="displayName; else elseblock">Romit Bhandari</h2>

    <ng-template #elseblock>
    <h2>
      Name is hidden
    </h2>
    </ng-template>


    <div *ngIf="displayName; then thenblock2 ; else elseblock2">
    </div>
    <ng-template #thenblock2>
    <h2>
      Romit Bhandari 2
    </h2>
    </ng-template>

    <ng-template #elseblock2>
    <h2>
      Name is hidden 2
    </h2>
    </ng-template>
  `,
  styles : [`
  `]
})
export class NgIfComponent implements OnInit {

  constructor() { }
  displayName = true;

  ngOnInit() {
  }

}
