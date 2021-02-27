import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  Shell.childRoutes([
    // { path: '', redirectTo: '/category', pathMatch: 'full' },
    { path: 'category', component: CategoryComponent, data: { title: marker('Menu') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CategoryRoutingModule { }
