import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import { ProveedorDetalleComponent } from './proveedor-detalle.component';

@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProveedorDetalleComponent
			},
     
			{
				path: 'proveedor-detalle',
        redirectTo: '',
				component: ProveedorDetalleComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		ProveedorDetalleComponent,
		
		
	]
	
})
export class ProveedorDetalleModule { }
