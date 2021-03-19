import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { CajasComponent } from './cajas.component';
import { CajaDetalleComponent } from './caja-detalle/caja-detalle.component';
import { CajaPagosComponent } from './caja-pagos/caja-pagos.component';
import { CajaPagoDetalleComponent } from './caja-pago-detalle/caja-pago-detalle.component';
import { CajaPagoItemComponent } from './caja-pago-item/caja-pago-item.component';
import { CajaPagoRegistroComponent } from './caja-pago-registro/caja-pago-registro.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    CoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: CajasComponent
      },
      {
        path: 'caja-pagos',
        component: CajaPagosComponent
      },
      {
        path: 'caja-detalle',
        component: CajaDetalleComponent
      },
      {
        path: 'caja-pago-detalle',
        component: CajaPagoDetalleComponent
      },
      {
        path: 'caja-pago-item',
        component: CajaPagoItemComponent
      },
      {
        path: 'caja-pago-registro',
        component: CajaPagoRegistroComponent,

      },
      {
        path: 'cajas',
        redirectTo: '',
        component: CajasComponent
      },

    ]),

  ],
  providers: [],
  declarations: [
    CajasComponent,
    CajaDetalleComponent,
    CajaPagosComponent,
    CajaPagoDetalleComponent,
    CajaPagoItemComponent,
    CajaPagoRegistroComponent,

  ]
})
export class CajasModule { }
