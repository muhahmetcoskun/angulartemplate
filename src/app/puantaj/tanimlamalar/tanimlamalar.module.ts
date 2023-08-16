import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TanimlamalarRoutingModule } from './tanimlamalar-routing.module';
import { TatilGunuTanimlaComponent } from './tatil-gunu-tanimla/tatil-gunu-tanimla.component';



@NgModule({
  declarations: [
    TatilGunuTanimlaComponent
  ],
  imports: [
 
    CommonModule,
    TanimlamalarRoutingModule,
    
  ],


exports: []
})
export class TanimlamalarModule { }
