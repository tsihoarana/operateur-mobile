import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffreFilteredPage } from './offre-filtered.page';

const routes: Routes = [
  {
    path: '',
    component: OffreFilteredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffreFilteredPageRoutingModule {}
