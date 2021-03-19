import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { ProductComponent } from './product.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoHistorialPrecioComponent } from './producto-historial-precio/producto-historial-precio.component';
import { ProductoPrecioNuevoComponent } from './producto-precio-nuevo/producto-precio-nuevo.component';



@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    CoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent
      },
      {
        path: 'product',
        redirectTo: '',
        component: ProductComponent
      },
      {
        path: 'product-detalle',
        component: ProductoDetalleComponent
      },
      {
        path: 'product-precio-nuevo',
        component: ProductoPrecioNuevoComponent
      },
      {
        path: 'product-historial-precio',
        component: ProductoHistorialPrecioComponent
      },
    ]),

  ],
  providers: [],
  declarations: [
    ProductComponent,
    ProductoDetalleComponent,
    ProductoHistorialPrecioComponent,
    ProductoPrecioNuevoComponent,

  ]
})
export class ProductModule { }
