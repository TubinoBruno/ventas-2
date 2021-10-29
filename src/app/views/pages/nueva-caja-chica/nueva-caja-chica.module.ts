import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { NuevaCajaChicaComponent } from './nueva-caja-chica.component';




@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: NuevaCajaChicaComponent
			},
      
			{
				path: 'caja-chica',
        redirectTo: '',
				component: NuevaCajaChicaComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		NuevaCajaChicaComponent,
	]
	
})
export class NuevaCajaChicaModule { }
