import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { ComprasProveedComponent } from './compras-proveed.component';
import { ProveedorDetalleComponent } from './proveedor-detalle/proveedor-detalle.component';
import { ProveedorNuevoComponent } from './proveedor-nuevo/proveedor-nuevo.component';

@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ComprasProveedComponent
			},
      {
				path: 'proveedor-detalle',
				component: ProveedorDetalleComponent
			},
      {
				path: 'proveedor-nuevo',
				component: ProveedorNuevoComponent
			},
			{
				path: 'proveed',
        redirectTo: '',
				component: ComprasProveedComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		ComprasProveedComponent,
		ProveedorDetalleComponent,
		ProveedorNuevoComponent,
		
		
	]
	
})
export class ComprasProveedModule { }
