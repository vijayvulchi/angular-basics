import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css'],
})
export class ProductAlertComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: 'empty',
    description: 'empty',
    price: 0,
  };

  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  notifyAlert() {
    this.notify.emit();
  }
}
