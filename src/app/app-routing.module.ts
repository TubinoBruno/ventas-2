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
				path: 'facturas',
				loadChildren: () => import('../app/views/pages/facturas/facturas.module').then(m => m.FacturasModule)
			},
			{
				path: 'new-factura',
				loadChildren: () => import('../app/views/pages/new-factura/new-factura.module').then(m => m.NewFacturaModule)
			},
			{
				path: 'new-product',
				loadChildren: () => import('../app/views/pages/new-product/new-product.module').then(m => m.NewProductModule)
			},
			
			{
				path: 'product',
				loadChildren: () => import('../app/views/pages/product/product.module').then(m => m.ProductModule)
			},
			{
				path: 'new-pago',
				loadChildren: () => import('../app/views/pages/new-pago/new-pago.module').then(m => m.NewPagoModule)
			},
			{
				path: 'dosificaciones',
				loadChildren: () => import('../app/views/pages/dosificaciones/dosificaciones.module').then(m => m.DosificacionesModule)
			},
			{
				path: 'cajas',
				loadChildren: () => import('../app/views/pages/cajas/cajas.module').then(m => m.CajasModule)
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
	{
		path: 'user',
		component: BaseComponent,
		canActivate: [AuthUserGuard],
		children : [
			{
				path : 'dashboard',
				loadChildren : () => import('../app/views/pages/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
			},
			{
				path : 'beneficios-usuario',
				loadChildren : () => import('../app/views/pages/user-benefits/user-benefits.module').then(m => m.UserBenefitsModule)
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'user/user-benefits', pathMatch: 'full'},
			{path: '**', redirectTo: 'user/user-benefits', pathMatch: 'full'}
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
