import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { ComprasComponent } from './compras.component';
import { ComprasSolicitudesComponent } from './compras-solicitudes/compras-solicitudes.component';
import { SolicitudDetalleComponent } from './solicitud-detalle/solicitud-detalle.component';
import { ComprasPropuestasDetalleComponent } from './compras-propuestas-detalle/compras-propuestas-detalle.component';
import { ComprasComparativasDetalleComponent } from './compras-comparativas-detalle/compras-comparativas-detalle.component';
import { ComprasOrdenDetalleComponent } from './compras-orden-detalle/compras-orden-detalle.component';
import { ComprasCotizacionesItemsComponent } from './compras-cotizaciones-items/compras-cotizaciones-items.component';
import { ComprasOrdenComponent } from './compras-orden/compras-orden.component';
import { ComprasComparativoComponent } from './compras-comparativo/compras-comparativo.component';
import { ComprasPropuestasComponent } from './compras-propuestas/compras-propuestas.component';

@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ComprasComponent
			},
      {
				path: 'compras-solicitud',
				component: ComprasSolicitudesComponent
			},
      {
				path: 'solicitud-detalle',
				component: SolicitudDetalleComponent
			},
      {
				path: 'compras-comparativa-detalle',
				component: ComprasComparativasDetalleComponent
			},
      {
				path: 'compras-propuestas-detalle',
				component: ComprasPropuestasDetalleComponent
			},
      {
				path: 'compras-orden-detalle',
				component: ComprasOrdenDetalleComponent
			},
      {
				path: 'compras-cotizaciones-items',
				component: ComprasCotizacionesItemsComponent
			},
			{
				path: 'comparativa',
				component: ComprasComparativoComponent
			},
      {
				path: 'propuestas',
				component: ComprasPropuestasComponent
			},
      {
				path: 'orden',
				component: ComprasOrdenComponent
			},
			{
				path: 'compra',
        redirectTo: '',
				component: ComprasComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		ComprasComponent,
		ComprasSolicitudesComponent,
		SolicitudDetalleComponent,
		ComprasPropuestasDetalleComponent,
		ComprasComparativasDetalleComponent,
		ComprasOrdenDetalleComponent,
		ComprasCotizacionesItemsComponent,
		ComprasPropuestasComponent,
		ComprasComparativoComponent,
		ComprasOrdenComponent,
		
		
		
	]
	
})
export class ComprasModule { }
