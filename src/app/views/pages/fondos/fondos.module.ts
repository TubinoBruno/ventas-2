import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { FondosComponent } from './fondos.component';
import { FondoSolicitudComponent } from './fondo-solicitud/fondo-solicitud.component';
import { FondoRendirComponent } from './fondo-rendir/fondo-rendir.component';
import { AutorizacionComponent } from './autorizacion/autorizacion.component';
import { EgresoComponent } from './egreso/egreso.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { FondoRendirFacturaComponent } from './fondo-rendir-factura/fondo-rendir-factura.component';




@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: FondosComponent
			},
			{
				path: 'solicitud',
				component: FondoSolicitudComponent
			},
			{
				path: 'rendir',
				component: FondoRendirComponent
			},
			{
				path: 'rendicion-detalle',
				component: FondosComponent
			},
      {
				path: 'autorizacion',
				component: AutorizacionComponent
			},
      {
				path: 'registro',
				component: FondoRendirFacturaComponent
			},
      {
				path: 'egreso',
				component: EgresoComponent
			},
      {
				path: 'transferencia',
				component: TransferenciaComponent
			},
			{
				path: 'fondo-caja',
        redirectTo: '',
				component: FondosComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		FondosComponent,
		FondoSolicitudComponent,
		FondoRendirComponent,
		AutorizacionComponent,
		EgresoComponent,
		TransferenciaComponent,
		FondoRendirFacturaComponent,
	
	]
	
})
export class FondosModule { }
