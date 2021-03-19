import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-cajas',
  templateUrl: './cajas.component.html',
  styleUrls: ['./cajas.component.scss']
})
export class CajasComponent implements OnInit {

  KTDatatableModal1: any;
  KTDatatableModal2: any;
  KTBootstrapSelect: any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router: Router) {
    g_router = router;
  }
  ngOnInit() {
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
  }
  initTable1() {
		this.service.getCajas().subscribe(res => {
			this.KTDatatableModal1 = function () {
				var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-cajas-abiertas');
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
                field: 'caja',
                title: 'Caja',
                width: 90,
                autoHide: false,
                template: function(row) {
                  return '<a class="kt-link link-num caja-detalle">' + row.caja + '</a>';

                },
              },{
                field: 'nom_sucursal',
                title: 'Sucursal',
                
              }, {
                field: 'tipo_caja',
                title: 'Tipo Caja',
              }, {
                field: 'maquina',
                title: 'Máquina',
              }, {
                field: 'cajero',
                title: 'Cajero',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Cerrada') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Abierta') {
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
		this.service.getCajas().subscribe(res => {
			this.KTDatatableModal2 = function () {
				var subRemoteTablaFuncionarios = function () {
					var el = $('#tabla-todas-cajas');
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
                field: 'caja',
                title: 'Caja',
                width: 90,
                autoHide: false,
                template: function(row) {
                  return '<a class="kt-link link-num caja-detalle">' + row.caja + '</a>';
                },
              },{
                field: 'nom_sucursal',
                title: 'Sucursal',
                
              }, {
                field: 'tipo_caja',
                title: 'Tipo Caja',
              }, {
                field: 'maquina',
                title: 'Máquina',
              }, {
                field: 'cajero',
                title: 'Cajero',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Cerrada') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Abierta') {
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
	$('#tabla-cajas-abiertas').on('click', 'a.caja-detalle', function () {
		g_router.navigate(['/admin/cajas/caja-detalle']);
	});
}
function initEvents1() {
	$('#tabla-todas-cajas').on('click', 'a.caja-detalle', function () {
		g_router.navigate(['/admin/cajas/caja-detalle']);
	});
}


