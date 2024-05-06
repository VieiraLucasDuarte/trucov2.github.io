import { NgModule } from '@angular/core';
import { TrucoComponentComponent } from './truco-component.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        TrucoComponentComponent
    ],
    exports: [
        TrucoComponentComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TrucoComponentComponentModule { }