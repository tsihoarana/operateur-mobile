import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VosOffresPage } from './vos-offres.page';

const routes: Routes = [
  {
    path: '',
    component: VosOffresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VosOffresPageRoutingModule {}
