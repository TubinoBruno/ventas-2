import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;

@Component({
  selector: 'kt-factura-pago',
  templateUrl: './factura-pago.component.html',
  styleUrls: ['./factura-pago.component.scss']
})
export class FacturaPagoComponent implements OnInit {
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
	$('#factura-datos').on('click', 'a.factura-item', function () {
		g_router.navigate(['/admin/facturas/factura-item']);
	});
}

function initEvents1() {
	$('#factura-datos').on('click', 'a.factura-dato', function () {
		g_router.navigate(['/admin/facturas/factura-detalle']);
	});
}
