import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import { ProveedorNuevoComponent } from './proveedor-nuevo.component';

@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProveedorNuevoComponent
			},
     
			{
				path: 'proveedor-nuevo',
        redirectTo: '',
				component: ProveedorNuevoComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		ProveedorNuevoComponent,
		
		
	]
	
})
export class ProveedorNuevoModule { }
