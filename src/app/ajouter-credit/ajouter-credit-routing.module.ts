import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterCreditPage } from './ajouter-credit.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterCreditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterCreditPageRoutingModule {}
