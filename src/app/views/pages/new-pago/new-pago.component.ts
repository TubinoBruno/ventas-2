import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-new-pago',
  templateUrl: './new-pago.component.html',
  styleUrls: ['./new-pago.component.scss']
})
export class NewPagoComponent implements OnInit {
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
  }
  initTable1() {
		this.service.getDetalleFactura().subscribe(res => {
			this.KTDatatableModal1 = function () {
				var subRemoteTablaFuncionarios = function () {
					var el = $('#tabla-detalle-factura');
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
                field: '',
                title: '#',
                sortable: false,
                width: 20,
                type: 'number',
                selector: {class: 'kt-checkbox--solid'},
                textAlign: 'center',
              }, {
                field: 'cod_item',
                title: 'Item',
                autoHide: false,
                width: 60,
                // callback function support for column rendering
                
              }, {
                field: 'descripcion',
                title: 'Descripción',
              }, {
                field: 'cantidad',
                title: 'Cantidad',
                width: 70,
              }, {
                field: 'precio_unitario',
                title: 'Precio Unit.',
                template: function(row) {
                  var precio = row.precio_unitario;
                  return 'Bs.'+precio;
                          },
              }, {
                field: 'moneda',
                title: 'Moneda',
              }, {
                field: 'subtotal',
                title: 'Subtotal',
                width: 70,
                autoHide: false,
                template: function(row) {
                  var subtotal = row.subtotal;
                  return 'Bs.'+subtotal;
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
		this.service.getPagosFactura().subscribe(res => {
			this.KTDatatableModal2 = function () {
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
			this.KTDatatableModal2.init();
		});
	}


}


