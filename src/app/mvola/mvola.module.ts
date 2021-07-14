import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MvolaPageRoutingModule } from './mvola-routing.module';

import { MvolaPage } from './mvola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MvolaPageRoutingModule
  ],
  declarations: [MvolaPage]
})
export class MvolaPageModule {}
