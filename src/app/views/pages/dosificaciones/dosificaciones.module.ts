import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { DosificacionesComponent } from './dosificaciones.component';
import { DetalleDosifComponent } from './detalle-dosif/detalle-dosif.component';
import { NuevaDosifComponent } from './nueva-dosif/nueva-dosif.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: DosificacionesComponent
			},
      {
				path: 'dosificacion-detalle',
				component: DetalleDosifComponent
			},
      {
				path: 'dosificacion-nueva',
				component: NuevaDosifComponent
			},
      		{
				path: 'dosificaciones',
        redirectTo: '',
				component: DosificacionesComponent
			},
			
		]),
    
	],
	providers: [],
	declarations: [
		DosificacionesComponent,
		DetalleDosifComponent,
		NuevaDosifComponent,
		
	]
})
export class DosificacionesModule { }
