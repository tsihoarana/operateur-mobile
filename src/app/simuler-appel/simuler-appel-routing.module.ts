import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimulerAppelPage } from './simuler-appel.page';

const routes: Routes = [
  {
    path: '',
    component: SimulerAppelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulerAppelPageRoutingModule {}
