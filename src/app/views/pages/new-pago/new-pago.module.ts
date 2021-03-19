import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { NewPagoComponent } from './new-pago.component';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: NewPagoComponent
			},
      		{
				path: 'new-pago',
        redirectTo: '',
				component: NewPagoComponent
			},
			
		]),
    
	],
	providers: [],
	declarations: [
		NewPagoComponent,
		
	]
})
export class NewPagoModule { }
