import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModule } from './cart/cart.module';
import { HomeModule } from './home/home.module';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [CartModule, HomeModule, CategoryModule]
})
export class FeatureModule { }
