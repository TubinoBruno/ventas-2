import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-caja-pago-registro',
  templateUrl: './caja-pago-registro.component.html',
  styleUrls: ['./caja-pago-registro.component.scss']
})
export class CajaPagoRegistroComponent implements OnInit {
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
  }
  initTable1() {
		this.service.getPagosFactura().subscribe(res => {
			this.KTDatatableModal1 = function () {
				var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-pagos-factura');
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
                field: 'monto',
                title: 'Monto',
                autoHide: false,
                width: 80,
                // callback function support for column rendering
                
              }, {
                field: 'moneda',
                title: 'Moneda',
                width: 80,
              }, {
                field: 'forma_pago',
                title: 'Forma de pago',
              }, {
                field: 'ent_finan',
                title: 'Entidad Financiera',
              }, {
                field: 'cod_transac',
                title: 'Código Transacción',
              }, {
                field: 'referencia',
                title: 'Referencia',
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
	$('#caja-pago-data').on('click', 'a.caja-pago-detalle', function () {
		g_router.navigate(['/admin/cajas/caja-pago-detalle']);
	});
}
function initEvents1() {
	$('#caja-pago-data').on('click', 'a.caja-pago-item', function () {
		g_router.navigate(['/admin/cajas/caja-pago-item']);
	});
}