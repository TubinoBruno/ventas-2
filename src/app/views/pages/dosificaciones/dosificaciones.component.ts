import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;

declare var $: any;
declare var Morris: any;


@Component({
  selector: 'kt-dosificaciones',
  templateUrl: './dosificaciones.component.html',
  styleUrls: ['./dosificaciones.component.scss']
})
export class DosificacionesComponent implements OnInit {
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
		this.service.getDosificaciones().subscribe(res => {
			this.KTDatatableModal1 = function () {
				var subRemoteTablaFuncionarios = function () {
					var el = $('#tabla-dosificaciones-vencidas');
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
                field: 'nom_sucursal',
                title: 'Sucursal',
                autoHide: false,
                          
              }, {
                field: 'direccion',
                title: 'Dirección',
                
              },{
                field: 'caja',
                title: 'Caja',
                width: 70,
              
              }, {
                field: 'tipo_caja',
                title: 'Tipo Caja',
              
              }, {
                field: 'maquina',
                title: 'Máquina',
              }, {
                field: 'estado_emisor',
                title: 'Estado emisor',
                width: 70,
              }, {
                field: 'talonario',
                title: 'Talonario',
                width: 90,
              }, {
                field: 'inicial',
                title: 'Inicial',
                width: 70,
              }, {
                field: 'estado_talonario',
                title: 'Estado talonario',
              }, {
                field: 'orden_autoriz',
                title: 'Orden/Autorización',
                autoHide: false,
                template: function(row) {
                  return '<a class="kt-link link-num dosificacion-detalle">' + row.orden_autoriz + '</a>';
                },
              }, {
                field: 'cajero',
                title: 'Cajero',
              }, {
                field: 'fecha_ini',
                title: 'Fecha desde',
              }, {
                field: 'estado_cajero',
                title: 'Estado cajero',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Vencido') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Activo') {
                    status = 'kt-badge--success';
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

		this.service.getDosificaciones().subscribe(res => {
			this.KTDatatableModal2 = function () {
				var subRemoteTablaFuncionarios = function () {
					var el = $('#tabla-todas-dosificaciones');
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
                field: 'nom_sucursal',
                title: 'Sucursal',
                autoHide: false,
                          
              }, {
                field: 'direccion',
                title: 'Dirección',
                
              },{
                field: 'caja',
                title: 'Caja',
                width: 70,
              
              }, {
                field: 'tipo_caja',
                title: 'Tipo Caja',
              
              }, {
                field: 'maquina',
                title: 'Máquina',
              }, {
                field: 'estado_emisor',
                title: 'Estado emisor',
                width: 70,
              }, {
                field: 'talonario',
                title: 'Talonario',
                width: 90,
              }, {
                field: 'inicial',
                title: 'Inicial',
                width: 70,
              }, {
                field: 'estado_talonario',
                title: 'Estado talonario',
              }, {
                field: 'orden_autoriz',
                title: 'Orden/Autorización',
                autoHide: false,
                template: function(row) {
                  return '<a class="kt-link link-num dosificacion-detalle">' + row.orden_autoriz + '</a>';

                },
              }, {
                field: 'cajero',
                title: 'Cajero',
              }, {
                field: 'fecha_ini',
                title: 'Fecha desde',
              }, {
                field: 'estado_cajero',
                title: 'Estado cajero',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Vencido') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Activo') {
                    status = 'kt-badge--success';
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
	$('#tabla-dosificaciones-vencidas').on('click', 'a.dosificacion-detalle', function () {
		g_router.navigate(['/admin/dosificaciones/dosificacion-detalle']);
	});
}
function initEvents1() {
	$('#tabla-todas-dosificaciones').on('click', 'a.dosificacion-detalle', function () {
		g_router.navigate(['/admin/dosificaciones/dosificacion-detalle']);
	});
}
function initEvents2() {
	$('#new-dosificacion').on('click', 'a.new-dosific', function () {
		g_router.navigate(['/admin/dosificaciones/dosificacion-nueva']);
	});
}
