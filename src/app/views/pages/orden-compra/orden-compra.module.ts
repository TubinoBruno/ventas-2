import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { OrdenCompraComponent } from './orden-compra.component';
import { OrdenDetalleComponent } from './orden-detalle/orden-detalle.component';
import { OrdenSolicitudComponent } from './orden-solicitud/orden-solicitud.component';



@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: OrdenCompraComponent
			},
      {
				path: 'orden-solicitud',
				component: OrdenSolicitudComponent
			},
      {
				path: 'orden-detalle',
				component: OrdenDetalleComponent
			},
			{
				path: 'orden-compra',
        redirectTo: '',
				component: OrdenCompraComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		OrdenCompraComponent,
		OrdenDetalleComponent,
		OrdenSolicitudComponent, 
 
		
	]
	
})
export class OrdenCompraModule { }
