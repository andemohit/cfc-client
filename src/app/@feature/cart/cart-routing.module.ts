import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { CartComponent } from './cart.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/cart', pathMatch: 'full' },
    { path: 'cart', component: CartComponent, data: { title: marker('Cart') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CartRoutingModule { }
