import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffreFilteredPageRoutingModule } from './offre-filtered-routing.module';

import { OffreFilteredPage } from './offre-filtered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffreFilteredPageRoutingModule
  ],
  declarations: [OffreFilteredPage]
})
export class OffreFilteredPageModule {}
