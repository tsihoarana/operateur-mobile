import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeAppelPage } from './liste-appel.page';

const routes: Routes = [
  {
    path: '',
    component: ListeAppelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeAppelPageRoutingModule {}
