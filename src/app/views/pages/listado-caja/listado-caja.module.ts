import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { ListadoCajaComponent } from './listado-caja.component';
import { CajaChicaDetalleComponent } from './caja-chica-detalle/caja-chica-detalle.component';
import { SolicitudDetalleComponent } from './solicitud-detalle/solicitud-detalle.component';
import { RendicionDetalleComponent } from './rendicion-detalle/rendicion-detalle.component';




@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ListadoCajaComponent
			},
			{
				path: 'caja-detalle',
				component: CajaChicaDetalleComponent
			},
			{
				path: 'solicitud-detalle',
				component: SolicitudDetalleComponent
			},
			{
				path: 'rendicion-detalle',
				component: RendicionDetalleComponent
			},
			{
				path: 'listado-caja',
        redirectTo: '',
				component: ListadoCajaComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		ListadoCajaComponent,
		CajaChicaDetalleComponent,
		SolicitudDetalleComponent,
		RendicionDetalleComponent,
	]
	
})
export class ListadoCajaModule { }
