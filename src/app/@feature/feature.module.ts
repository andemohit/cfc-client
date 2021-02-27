import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartModule
  ],
  exports: [CartModule]
})
export class FeatureModule { }
