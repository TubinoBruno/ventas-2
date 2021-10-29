import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { PedidosAlmacenSolicitudDetalleComponent } from './pedidos-almacen-solicitud-detalle/pedidos-almacen-solicitud-detalle.component';
import { PedidosAlmacenSolicitudComponent } from './pedidos-almacen-solicitud/pedidos-almacen-solicitud.component';
import { PedidosAlmacenListaComponent } from './pedidos-almacen-lista.component';
import { PedidosAlmacenItemsComponent } from './pedidos-almacen-items/pedidos-almacen-items.component';
import { PedidosAlmacenItemsDetalleComponent } from './pedidos-almacen-items-detalle/pedidos-almacen-items-detalle.component';



@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: PedidosAlmacenListaComponent
			},
      {
				path: 'pedidos-almacen-solicitud-detalle',
				component: PedidosAlmacenSolicitudDetalleComponent
			},
      {
				path: 'pedidos-almacen-solicitud',
				component: PedidosAlmacenSolicitudComponent
			},
      {
				path: 'pedidos-almacen-items',
				component: PedidosAlmacenItemsComponent
			},
      {
				path: 'pedidos-almacen-items-detalle',
				component: PedidosAlmacenItemsDetalleComponent
			},
			{
				path: 'pedido-almacen',
        redirectTo: '',
				component: PedidosAlmacenListaComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		PedidosAlmacenListaComponent,
		PedidosAlmacenSolicitudComponent,
		PedidosAlmacenSolicitudDetalleComponent,
		PedidosAlmacenItemsComponent,
		PedidosAlmacenItemsDetalleComponent, 
 
		
	]
	
})
export class PedidosAlmacenListaModule { }
