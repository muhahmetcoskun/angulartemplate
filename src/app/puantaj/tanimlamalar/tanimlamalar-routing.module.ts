import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TatilGunuTanimlaComponent } from './tatil-gunu-tanimla/tatil-gunu-tanimla.component';




@NgModule({
  imports: [RouterModule.forChild([
		{ path: '',    component:TatilGunuTanimlaComponent
  }
	])],
  exports: [RouterModule]
})
export class TanimlamalarRoutingModule { }
