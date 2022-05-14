import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  template: `<h2>ShadowDom</h2>
  <div class="shadow-message">Shadow DOM encapsulation - Angular adds styles for this component only to the shadow DOM host, so they are not visible outside the shadow DOM.</div>
  <app-encapsulation-emulated></app-encapsulation-emulated>
  <app-no-encapsulation></app-no-encapsulation>`,
  styles: ['h2, .shadow-message { color: blue; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
