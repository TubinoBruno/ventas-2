import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { PagoAnticipoComponent } from './pago-anticipo.component';
import { ProveedorAnticipoComponent } from './proveedor-anticipo/proveedor-anticipo.component';
import { ProveedorAnticipoDetalleComponent } from './proveedor-anticipo-detalle/proveedor-anticipo-detalle.component';
import { RendicionComponent } from './rendicion/rendicion.component';
import { AnticipoComponent } from './anticipo/anticipo.component';
import { AnticipoDetalleComponent } from './anticipo-detalle/anticipo-detalle.component';
import { RendicionDetalleComponent } from './rendicion-detalle/rendicion-detalle.component';



@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: PagoAnticipoComponent
			},
      {
				path: 'proveedor-anticipo-detalle',
				component: ProveedorAnticipoDetalleComponent
			},
      {
				path: 'proveedor-anticipo',
				component: ProveedorAnticipoComponent
			},
      {
				path: 'rendicion',
				component: RendicionComponent
			},
      {
				path: 'anticipo',
				component: AnticipoComponent
			},
      {
				path: 'rendicion-detalle',
				component: RendicionDetalleComponent
			},
      {
				path: 'anticipo-detalle',
				component: AnticipoDetalleComponent
			},
			{
				path: 'pago-anticipo',
        redirectTo: '',
				component: PagoAnticipoComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		PagoAnticipoComponent,
		ProveedorAnticipoComponent,
		ProveedorAnticipoDetalleComponent,
		RendicionComponent,
		AnticipoComponent,
		AnticipoDetalleComponent,
		RendicionDetalleComponent,
 
		
	]
	
})
export class PagoAnticipoModule { }
