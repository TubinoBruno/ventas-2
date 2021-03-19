import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.scss']
})
export class DetalleFacturaComponent implements OnInit {
  KTBootstrapSelect: any;
  KTDatatableModal1: any;

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
}
function initEvents() {
	$('#dato-factura').on('click', 'a.datos-factura', function () {
		g_router.navigate(['/admin/new-factura/new-factura']);
	});
}