import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { FacturasComponent } from './facturas.component';
import { FacturasDetalleComponent } from './facturas-detalle/facturas-detalle.component';
import { FacturaItemComponent } from './factura-item/factura-item.component';
import { FacturaPagoComponent } from './factura-pago/factura-pago.component';


@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: FacturasComponent
			},
      		{
				path: 'facturas',
        redirectTo: '',
				component: FacturasComponent
			},
			{
				path: 'factura-item',
				component: FacturaItemComponent
			},
			{
				path: 'factura-pago',
				component: FacturaPagoComponent
			},
      		{
				path: 'factura-detalle',
				component: FacturasDetalleComponent
			},
		]),
    
	],
	providers: [],
	declarations: [
		FacturasComponent,
		FacturasDetalleComponent,
		FacturaItemComponent,
		FacturaPagoComponent,
	]
})
export class FacturasModule { }
