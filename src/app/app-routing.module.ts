// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
import { ErrorPageComponent } from './views/theme/content/error-page/error-page.component';
// Auth
import { AuthGuard } from './core/auth';
import {AuthUserGuard } from './core/auth';

const routes: Routes = [
	{ path : '', loadChildren : () => import('../app/views/pages/home/home.module').then(m => m.HomeModule)},
	{ path: 'admin', loadChildren: () => import('../app/views/pages/auth/auth.module').then(m => m.AuthModule)},
	{ path : 'user', loadChildren : () => import('../app/views/pages/auth-user/auth-user.module').then(m => m.AuthUserModule)},
	{
		path: 'admin',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('../app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			
			{
				path: 'proveed',
				loadChildren: () => import('../app/views/pages/compras-proveed/compras-proveed.module').then(m => m.ComprasProveedModule)
			},
			{
				path: 'orden-compra',
				loadChildren: () => import('../app/views/pages/orden-compra/orden-compra.module').then(m => m.OrdenCompraModule)
			},
			
			{
				path: 'pago-proveedor',
				loadChildren: () => import('../app/views/pages/pago-proveedores/pago-proveedores.module').then(m => m.PagoProveedoresModule)
			},
			{
				path: 'pago-anticipo',
				loadChildren: () => import('../app/views/pages/pago-anticipo/pago-anticipo.module').then(m => m.PagoAnticipoModule)
			},
			{
				path: 'pedido-almacen',
				loadChildren: () => import('../app/views/pages/pedidos-almacen-lista/pedidos-almacen-lista.module').then(m => m.PedidosAlmacenListaModule)
			},
			{
				path: 'caja-chica',
				loadChildren: () => import('../app/views/pages/nueva-caja-chica/nueva-caja-chica.module').then(m => m.NuevaCajaChicaModule)
			},
			
			{
				path: 'listado-caja',
				loadChildren: () => import('../app/views/pages/listado-caja/listado-caja.module').then(m => m.ListadoCajaModule)
			},
			{
				path: 'fondo-caja',
				loadChildren: () => import('../app/views/pages/fondos/fondos.module').then(m => m.FondosModule)
			},
			{
				path: 'pago-servicio-lista',
				loadChildren: () => import('../app/views/pages/pago-servicios-lista/pago-servicios-lista.module').then(m => m.PagoServiciosListaModule)
			},
			{
				path: 'contrato',
				loadChildren: () => import('../app/views/pages/contratos/contratos.module').then(m => m.ContratosModule)
			},
			{
				path: 'compra',
				loadChildren: () => import('../app/views/pages/compras/compras.module').then(m => m.ComprasModule)
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					'type': 'error-v6',
					'code': 403,
					'title': '403... Access forbidden',
					'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
				}
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'admin/dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'admin/dashboard', pathMatch: 'full'}
		]
	},
	
	{path: '', redirectTo: '', pathMatch: 'full'},
	{path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
