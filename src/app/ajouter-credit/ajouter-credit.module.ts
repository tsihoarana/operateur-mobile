import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterCreditPageRoutingModule } from './ajouter-credit-routing.module';

import { AjouterCreditPage } from './ajouter-credit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterCreditPageRoutingModule
  ],
  declarations: [AjouterCreditPage]
})
export class AjouterCreditPageModule {}
