import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import { CategoryRoutingModule } from './category-routing.module';
import { PrimeNGModule } from '@app/primeng.module';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/@shared';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    PrimeNGModule,
    CategoryRoutingModule
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
