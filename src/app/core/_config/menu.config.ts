export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					subtitle: 'dashboard',
					root: true,
					alignment: 'left',
					toggle: 'click',
					page: '/admin/dashboard',
					translate: 'MENU.DASHBOARD',

				},
				{
					title : 'Facturación',
					subtitle: 'facturacion',
					root : true,
					alignment : 'left',
					toggle : 'click',
					submenu : [ 
						{
							title : 'Nueva factura',
							bullet : 'dot',
							icon: 'fa fa-file-invoice-dollar',
							page : '/admin/new-factura'
						},
						{
							title : 'Facturas',
							bullet : 'dot',
							icon: 'fa fa-copy',
							page : '/admin/facturas'
						}

					]
				},
				{
					title : 'Productos',
					root : true,
					alignment : 'left',
					toggle : 'click',
					submenu : [
						{
							title : 'Nuevo Producto',
							icon : 'fa fa-user-plus',
							page : '/admin/new-product'
						},
						{
							title : 'Productos',
							icon : 'flaticon2-file-1',
							page : '/admin/product'
						}
					]
				},
				{
					title : 'Cajas',
					root : true,
					alignment : 'left',
					toggle : 'click',
					submenu : [
						{
							title : 'Cajas',
							icon : 'fa fa-calculator',
							page : '/admin/cajas'
						},
						{
							title : 'Dosificaciones',
							icon : 'flaticon2-sheet',
							page : '/admin/dosificaciones'
						},
						{
							title : 'Nuevo Pago',
							icon : 'fa fa-plus-square',
							page : '/admin/new-pago'
						}
					]
				},
				
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-protection',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{
					title : 'Personal',
					root : true,
					alignment : 'left',
					icon : 'flaticon2-list-3',
				},
				{
					title : 'Recursos Humanos',
					root : true,
					alignment : 'left',
					icon : 'flaticon2-group',
				},
				{
					title : 'Ventas',
					root : true,
					alignment : 'left',
					page: '/admin/',

					bullet : 'dot',
					icon : 'flaticon2-shopping-cart-1',
				},
				{
					title : 'Modulo 4',
					root : true,
					alignment : 'left',
					bullet : 'dot',
					icon : 'flaticon2-analytics-2',
					submenu : []
				},
				{
					title : 'Modulo 5',
					root : true,
					alignment : 'left',
					icon : 'flaticon2-medical-records-1',
				},
				{
					title: 'Module 6',
					root: true,
					icon: 'flaticon2-gear',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 7',
					root: true,
					icon: '',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}

	public user_defaults : any = {
		header : {
			self : {},
			items : [
				{
					title : 'Beneficios',
					root : true,
					alignment : 'left',
					toggle : 'click',
					submenu : [ 
						{
							title : 'Solicitudes beneficios',
							bullet : 'dot',
							icon: 'flaticon-business',
							page : '/user/beneficios-usuario'
						},
					]
				},
			]
		},
		aside : {
			self : {},
			items : [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-protection',
					page: '/user/dashboard',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Personal',
					root: true,
					icon: 'flaticon2-list-3',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'recursos humanos',
					root: true,
					icon: 'flaticon2-group',
					page: '/user/beneficios-usuario',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 3',
					root: true,
					icon: 'flaticon2-hourglass-1',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 4',
					root: true,
					icon: 'flaticon2-analytics-2',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 5',
					root: true,
					icon: 'flaticon2-medical-records-1',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 6',
					root: true,
					icon: 'flaticon2-gear',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
				{
					title: 'Module 7',
					root: true,
					icon: '',
					page: '',
					translate: 'MENU.DASHBOARD',
				},
			]
		}
	}

	public get user_configs() : any {
		return this.user_defaults;
	}
}
