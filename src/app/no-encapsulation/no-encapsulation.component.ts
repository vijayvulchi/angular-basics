import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-encapsulation',
  template: `
  <h2>None</h2>
    <div class="none-message">No encapsulation - Angular adds the styles for this component as global styles to the head of the document.</div>`,
  styles: ['h2, .none-message { color: red; }'],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
