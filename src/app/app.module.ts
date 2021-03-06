import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { LifecycleOnchangesComponent } from './lifecycle-onchanges/lifecycle-onchanges.component';
import { LifecycleOninitComponent } from './lifecycle-oninit/lifecycle-oninit.component';
import { NoEncapsulationComponent } from './no-encapsulation/no-encapsulation.component';
import { EncapsulationEmulatedComponent } from './encapsulation-emulated/encapsulation-emulated.component';
import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { ParentComponentComponent } from './data-passing/parent-component/parent-component.component';
import { ChildComponentComponent } from './data-passing/child-component/child-component.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    LifecycleOnchangesComponent,
    LifecycleOninitComponent,
    NoEncapsulationComponent,
    EncapsulationEmulatedComponent,
    ShadowDomEncapsulationComponent,
    ParentComponentComponent,
    ChildComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
