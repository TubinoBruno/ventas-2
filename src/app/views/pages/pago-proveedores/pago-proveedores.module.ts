import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { PagoProveedoresComponent } from './pago-proveedores.component';
import { ProveedorFacturaComponent } from './proveedor-factura/proveedor-factura.component';
import { ProveedorFacturaDetalleComponent } from './proveedor-factura-detalle/proveedor-factura-detalle.component';
import { SolicitudPagoComponent } from './solicitud-pago/solicitud-pago.component';
import { CuentaPagarComponent } from './cuenta-pagar/cuenta-pagar.component';
import { AsignacionBancariaComponent } from './asignacion-bancaria/asignacion-bancaria.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { ChequeComponent } from './cheque/cheque.component';
import { AsignacionBancariaDetalleComponent } from './asignacion-bancaria-detalle/asignacion-bancaria-detalle.component';
import { ChequeDetalleComponent } from './cheque-detalle/cheque-detalle.component';
import { CuentaPagarDetalleComponent } from './cuenta-pagar-detalle/cuenta-pagar-detalle.component';
import { SolicitudPagoDetalleComponent } from './solicitud-pago-detalle/solicitud-pago-detalle.component';
import { TransferenciaDetalleComponent } from './transferencia-detalle/transferencia-detalle.component';

@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: PagoProveedoresComponent
			},
      {
				path: 'proveedor-factura',
				component: ProveedorFacturaComponent
			},
      {
				path: 'proveedor-factura-detalle',
				component: ProveedorFacturaDetalleComponent
			},
      {
				path: 'solicitud-pago',
				component: SolicitudPagoComponent
			},
      {
				path: 'cuenta-pagar',
				component: CuentaPagarComponent
			},
      {
				path: 'asignacion-bancaria',
				component: AsignacionBancariaComponent
			},
      {
				path: 'transferencia',
				component: TransferenciaComponent
			},
      {
				path: 'cheque',
				component: ChequeComponent
			},
			{
				path: 'solicitud-pago-detalle',
				component: SolicitudPagoDetalleComponent
			},
      {
				path: 'cuenta-pagar-detalle',
				component: CuentaPagarDetalleComponent
			},
      {
				path: 'asignacion-bancaria-detalle',
				component: AsignacionBancariaDetalleComponent
			},
      {
				path: 'transferencia-detalle',
				component: TransferenciaDetalleComponent
			},
      {
				path: 'cheque-detalle',
				component: ChequeDetalleComponent
			},
			{
				path: 'pago-proveedor',
        redirectTo: '',
				component: PagoProveedoresComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		PagoProveedoresComponent,
		ProveedorFacturaComponent,
		ProveedorFacturaDetalleComponent,
		SolicitudPagoComponent,
		CuentaPagarComponent,
		AsignacionBancariaComponent,
		TransferenciaComponent,
		ChequeComponent,
		AsignacionBancariaDetalleComponent,
		ChequeDetalleComponent,
		CuentaPagarDetalleComponent,
		SolicitudPagoDetalleComponent,
		TransferenciaDetalleComponent,
	 
 
		
	]
})
export class PagoProveedoresModule { }
