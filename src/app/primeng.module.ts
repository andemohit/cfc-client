import { NgModule } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { OrderListModule } from 'primeng/orderlist';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
    exports: [
        CarouselModule,
        CardModule,
        ButtonModule,
        BadgeModule,
        OrderListModule,
        InputNumberModule,
        DividerModule,
        MenubarModule,
    ]
})
export class PrimeNGModule { }
