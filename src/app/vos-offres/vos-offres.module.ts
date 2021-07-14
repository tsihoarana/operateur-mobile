import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VosOffresPageRoutingModule } from './vos-offres-routing.module';

import { VosOffresPage } from './vos-offres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VosOffresPageRoutingModule
  ],
  declarations: [VosOffresPage]
})
export class VosOffresPageModule {}
