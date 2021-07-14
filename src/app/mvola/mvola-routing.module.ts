import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MvolaPage } from './mvola.page';

const routes: Routes = [
  {
    path: '',
    component: MvolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MvolaPageRoutingModule {}
