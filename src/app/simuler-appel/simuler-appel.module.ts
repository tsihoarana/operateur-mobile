import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimulerAppelPageRoutingModule } from './simuler-appel-routing.module';

import { SimulerAppelPage } from './simuler-appel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimulerAppelPageRoutingModule
  ],
  declarations: [SimulerAppelPage]
})
export class SimulerAppelPageModule {}
