import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../hero';

@Component({
  selector: 'app-child-component',
  template: `<h3>{{hero.name}} says:</h3>
  <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>`,
})
export class ChildComponentComponent implements OnInit {
  @Input() hero!: Hero;
  @Input('master') masterName = '';
  constructor() {}

  ngOnInit(): void {}
}
