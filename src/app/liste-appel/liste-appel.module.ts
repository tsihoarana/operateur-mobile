import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeAppelPageRoutingModule } from './liste-appel-routing.module';

import { ListeAppelPage } from './liste-appel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeAppelPageRoutingModule
  ],
  declarations: [ListeAppelPage]
})
export class ListeAppelPageModule {}
