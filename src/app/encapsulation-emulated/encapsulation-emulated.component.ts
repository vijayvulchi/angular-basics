import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-emulated',
  template: `<h2>Emulated</h2>
  <div class="emulated-message">Emulated encapsulation - Angular adds the styles for this component to the head of the document, but with "scoped" styles</div>`,
  styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EncapsulationEmulatedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
