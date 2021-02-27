import { NgModule } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';

@NgModule({
    exports: [
        CarouselModule,
        CardModule,
        ButtonModule,
        BadgeModule
    ]
})
export class PrimeNGModule { }
