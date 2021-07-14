import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'

import { CustomLoadingComponent } from './custom-loading/custom-loading.component';


@NgModule({
    declarations: [
        CustomLoadingComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        CustomLoadingComponent
    ]
})
export class ComponentsModule { }
