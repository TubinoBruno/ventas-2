import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-caja-pagos',
  templateUrl: './caja-pagos.component.html',
  styleUrls: ['./caja-pagos.component.scss']
})
export class CajaPagosComponent implements OnInit {
  KTDatatableModal1: any;
  KTBootstrapSelect: any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router: Router) {
    g_router = router;
  }
  ngOnInit() {
    this.initTable1();
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
		this.service.getCajasPagos().subscribe(res => {
			this.KTDatatableModal1 = function () {
				var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-caja-pagos');
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
                  field: 'factura',
                  title: 'Factura',
                  width: 90,
                  autoHide: false,
                  template: function(row) {
                    return '<a class="kt-link link-num caja-detalle">' + row.factura + '</a>';

                  },
                },{
                  field: 'contrato',
                  title: 'Contrato',
                  
                }, {
                  field: 'nom_factura',
                  title: 'Nombre Factura',
                }, {
                  field: 'nit_factura',
                  title: 'Nit Factura',
                }, {
                  field: 'monto',
                  title: 'Monto',
                  autoHide: false,
                }, {
                  field: 'moneda',
                  title: 'Moneda',
                  autoHide: false,
                  
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
}
function initEvents() {
	$('#caja-data').on('click', 'a.datos-caja', function () {
		g_router.navigate(['/admin/cajas/caja-detalle']);
	});
}
function initEvents1() {
	$('#new-d').on('click', 'a.new-paga', function () {
		g_router.navigate(['/admin/new-pago']);
	});
}
function initEvents2() {
	$('#tabla-caja-pagos').on('click', 'a.caja-detalle', function () {
		g_router.navigate(['/admin/cajas/caja-pago-detalle']);
	});
}