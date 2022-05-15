import { Component, OnInit } from '@angular/core';

import { HEROES } from '../../hero';

@Component({
  selector: 'app-parent-component',
  template: `<h2>{{master}} controls {{heroes.length}} heroes</h2>
  <app-child-component
    *ngFor="let hero of heroes"
    [hero]="hero"
    [master]="master">
  </app-child-component>`,
})
export class ParentComponentComponent implements OnInit {
  heroes = HEROES;
  master = 'Master';

  constructor() {}

  ngOnInit(): void {}
}
