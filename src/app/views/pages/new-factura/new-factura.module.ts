import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { NewFacturaComponent } from './new-factura.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: NewFacturaComponent
			},
      		{
				path: 'new-factura',
        redirectTo: '',
				component: NewFacturaComponent
			},
			{
				path: 'detalle-factura',
				component: DetalleFacturaComponent
			},
		]),
    
	],
	providers: [],
	declarations: [
		NewFacturaComponent,
		DetalleFacturaComponent,
		
	]
})
export class NewFacturaModule { }
