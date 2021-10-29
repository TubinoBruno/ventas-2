import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { ContratoDetalleComponent } from './contrato-detalle/contrato-detalle.component';
import { ContratoNuevoComponent } from './contrato-nuevo/contrato-nuevo.component';
import { ContratosComponent } from './contratos.component';
import { ContratoAdendaComponent } from './contrato-adenda/contrato-adenda.component';
import { ContratoRecisionComponent } from './contrato-recision/contrato-recision.component';




@NgModule({
  imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ContratosComponent
			},
      {
				path: 'contrato-detalle',
				component: ContratoDetalleComponent
			},
      {
				path: 'contrato-nuevo',
				component: ContratoNuevoComponent
			},
      {
				path: 'contrato-adenda',
				component: ContratoAdendaComponent
			},
      {
				path: 'contrato-recision',
				component: ContratoRecisionComponent
			},
			{
				path: 'contrato',
        redirectTo: '',
				component: ContratosComponent
			}
		]),
    
	],
	providers: [],
  declarations: [
		ContratoDetalleComponent, 
    ContratoNuevoComponent,
    ContratosComponent,
    ContratoAdendaComponent,
    ContratoRecisionComponent
		
		
	]
	
})
export class ContratosModule { }
