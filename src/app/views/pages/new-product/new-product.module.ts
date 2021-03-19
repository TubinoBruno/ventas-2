import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { NewProductComponent } from './new-product.component';


@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: NewProductComponent
			},
      		{
				path: 'new-product',
        redirectTo: '',
				component: NewProductComponent
			},
			
		]),
    
	],
	providers: [],
	declarations: [
		NewProductComponent,
		
	]
})
export class NewProductModule { }
