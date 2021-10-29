import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { PagoServiciosListaComponent } from './pago-servicios-lista.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServicioDetalleComponent } from './servicio-detalle/servicio-detalle.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ComprobanteEgresoComponent } from './comprobante-egreso/comprobante-egreso.component';
import { ComprobantePagarComponent } from './comprobante-pagar/comprobante-pagar.component';
import { ComprobanteEgresoDetalleComponent } from './comprobante-egreso-detalle/comprobante-egreso-detalle.component';
import { ComprobantePagarDetalleComponent } from './comprobante-pagar-detalle/comprobante-pagar-detalle.component';
import { SolicitudDetalleComponent } from './solicitud-detalle/solicitud-detalle.component';

@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: PagoServiciosListaComponent
			},
      
      {
				path: 'servicio',
				component: ServicioComponent
			},
      {
				path: 'servicio-detalle',
				component: ServicioDetalleComponent
			},
      {
				path: 'solicitud',
				component: SolicitudComponent
			},
      {
				path: 'comprobante-egreso',
				component: ComprobanteEgresoComponent
			},
      {
				path: 'comprobante-pagar',
				component: ComprobantePagarComponent
			},
			{
				path: 'comprobante-pagar-detalle',
				component: ComprobantePagarDetalleComponent
			},
			{
				path: 'comprobante-egreso-detalle',
				component: ComprobanteEgresoDetalleComponent
			},
			{
				path: 'solicitud-detalle',
				component: SolicitudDetalleComponent
			},
			{
				path: 'pago-servicio-lista',
        redirectTo: '',
				component: PagoServiciosListaComponent
			}
		]),
    
	],
	providers: [],
  declarations: [PagoServiciosListaComponent,
     ServicioComponent,
      ServicioDetalleComponent,
      SolicitudComponent,
      ComprobanteEgresoComponent,
      ComprobantePagarComponent,
      ComprobanteEgresoDetalleComponent,
      ComprobantePagarDetalleComponent,
      SolicitudDetalleComponent
	
 
		
	]
	
})
export class PagoServiciosListaModule { }
