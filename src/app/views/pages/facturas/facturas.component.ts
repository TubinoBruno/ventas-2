import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;

declare var $: any;
declare var Morris: any;



@Component({
  selector: 'kt-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {

  KTDatatableModal1: any;
	KTDatatableModal2: any;
	KTBootstrapSelect: any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router: Router) {
	g_router = router;
	}

	ngOnInit(): void {
		
		this.initTable1();
		this.initTable2();
		this.KTBootstrapSelect = function () {

			// Private functions
			var demos = function () {
				// minimum setup
				$('.kt-selectpicker').selectpicker();
			}

			return {
				// public functions
				init: function () {
					demos();
				}
			};
		}();
		this.KTBootstrapSelect.init();
		initEvents();
		initEvents1();
		initEvents2();

	}
  initTable1() {
		this.service.getDashboardTableData2().subscribe(res => {
			this.KTDatatableModal1 = function () {
				var subRemoteTablaFuncionarios = function () {
					var el = $('#tabla-facturas-pendientes');
					var datatable = el.KTDatatable({
						// datasource definition
						data: {
							type: 'local',		//remote if real url is provided
							source: {
								data: res['data']
							},
							pageSize: 10,
							//serverPaging: true,
							//serverFiltering: false,
							//serverSorting: true,
						},

						// layout definition
						layout: {
							theme: 'default',
							scroll: false,
							height: null,
							footer: false,
						},

						// column sorting
						sortable: true,

						pagination: true,

						search: {
							input: $('#generalSearch1')
						},

						// columns definition
						columns: [
							{
								field: 'num_factura',
								title: 'Número',
								autoHide: false,
								width: 70,
								// callback function support for column rendering
								template: function(row) {
									return '<a class="kt-link link-num factura-detalle">' + row.num_factura + '</a>';

								},
								
							}, {
								field: 'fecha_factura',
								title: 'Fecha',
								width: 90,
							},{
								field: 'num_contrato',
								title: 'Num Contrato',
								width: 70,
							
							}, {
								field: 'nom_factura',
								title: 'Nombre Factura',
							
							}, {
								field: 'nit_factura',
								title: 'Nit Factura',
							}, {
								field: 'total_bs',
								title: 'Total Bs.',
								width: 70,
							}, {
								field: 'total_usd',
								title: 'Total Usd',
							}, {
								field: 'num_dosificacion',
								title: 'Dosificación',
							}, {
								field: 'estado',
								title: 'Estado',
								autoHide: false,
								// callback function support for column rendering
								template: function(row) {
									if (row.estado == 'Anulada') {
										status = 'kt-badge--danger';
									} else if(row.estado == 'Pagada') {
										status = 'kt-badge--success';
									} else if(row.estado == 'Por pagar') {
										status = 'kt-badge--warning';
									} else {
										return ' ';
									}
									return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill ">' + row.estado + '</span>';
								},
							}],
					});

				};
				return {
					// public functions
					init: function () {

						subRemoteTablaFuncionarios();

					}
				};
			}();
			this.KTDatatableModal1.init();
		});
	}

	initTable2() {

		this.service.getDashboardTableData2().subscribe(res => {
			this.KTDatatableModal2 = function () {
				var subRemoteTablaFuncionarios = function () {
					var el = $('#tabla-todas-facturas');
					var datatable = el.KTDatatable({
						// datasource definition
						data: {
							type: 'local',		//remote if real url is provided
							source: {
								data: res['data']
							},
							pageSize: 10,
							//serverPaging: true,
							//serverFiltering: false,
							//serverSorting: true,
						},

						// layout definition
						layout: {
							theme: 'default',
							scroll: false,
							height: null,
							footer: false,
						},

						// column sorting
						sortable: true,

						pagination: true,

						search: {
							input: $('#generalSearch1')
						},

						// columns definition
						columns: [
							{
								field: 'num_factura',
								title: 'Número',
								autoHide: false,
								width: 70,
								// callback function support for column rendering
								template: function(row) {
									
									return '<a class="kt-link link-num factura-detalle">' + row.num_factura + '</a>';
								},
								
							}, {
								field: 'fecha_factura',
								title: 'Fecha',
								width: 90,
							},{
								field: 'num_contrato',
								title: 'Num Contrato',
								width: 70,
							
							}, {
								field: 'nom_factura',
								title: 'Nombre Factura',
							
							}, {
								field: 'nit_factura',
								title: 'Nit Factura',
							}, {
								field: 'total_bs',
								title: 'Total Bs.',
								width: 70,
							}, {
								field: 'total_usd',
								title: 'Total Usd',
							}, {
								field: 'num_dosificacion',
								title: 'Dosificación',
							}, {
								field: 'estado',
								title: 'Estado',
								autoHide: false,
								// callback function support for column rendering
								template: function(row) {
									if (row.estado == 'Anulada') {
										status = 'kt-badge--danger';
									} else if(row.estado == 'Pagada') {
										status = 'kt-badge--success';
									} else if(row.estado == 'Por pagar') {
										status = 'kt-badge--warning';
									} else {
										return ' ';
									}
									return '<span class="kt-badge ' + status + ' kt-badge--inline kt-badge--pill ">' + row.estado + '</span>';
								},
							}],
					});

				};
				return {
					// public functions
					init: function () {

						subRemoteTablaFuncionarios();

					}
				};
			}();
			this.KTDatatableModal2.init();
		});
	}

  
}
function initEvents() {
	$('#tabla-facturas-pendientes').on('click', 'a.factura-detalle', function () {
		g_router.navigate(['/admin/facturas/factura-detalle']);
	});
}
function initEvents1() {
	$('#tabla-todas-facturas').on('click', 'a.factura-detalle', function () {
		g_router.navigate(['/admin/facturas/factura-detalle']);
	});
}
function initEvents2() {
	$('#new-f').on('click', 'a.nueva-factura', function () {
		g_router.navigate(['/admin/new-factura']);
	});
}