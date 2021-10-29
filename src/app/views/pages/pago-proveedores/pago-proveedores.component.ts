import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-pago-proveedores',
  templateUrl: './pago-proveedores.component.html',
  styleUrls: ['./pago-proveedores.component.scss']
})
export class PagoProveedoresComponent implements OnInit {
  KTBootstrapSelect: any;
  KTDatatableModal1: any;
  KTDatatableModal2: any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router: Router) {
    g_router = router;
  }
  ngOnInit() {
    this.initTable2();
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
    // initEvents();
    initEvents1();
    initEvents2();
    initEvents3();

  }
  initTable1() {
    this.service.getFacturasProveedores().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-facturas-proveedores-lista');
          var datatable = el.KTDatatable({
            // datasource definition
            data: {
              type: 'local',		//remote if real url is provided
              source: {
                data: res['data']
              
              },
              pageSize: 10, // display 20 records per page
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
              input: el.find('#generalSearch'),
            },
      
            // columns definition
            columns: [
              {
                field: 'num_oc',
                title: 'Número OC',
                autoHide: false,
                template: function(row) {
                  return '<a class="kt-link link-num num-oc">'+row.num_oc+'</a>';
                }
                
              }, {
                field: 'fecha_entrega',
                title: 'Fecha entrega',
                width: 90,
              }, {
                field: 'nit_proveedor',
                title: 'Nit proveedor',
                width: 70,
              }, {
                field: 'nom_proveedor',
                title: 'Nombre proveedor',
              }, {
                field: 'monto',
                title: 'Monto',
                width: 70,
                template: function(row) {
                  return row.moneda+row.monto;
                }
              }, {
                field: 'centro_costo',
                title: 'Centro de costo',
              
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Rechazado') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Aprobado') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Generado') {
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
    this.service.getFacturasProveedores().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-todas-facturas-proveedores');
          var datatable = el.KTDatatable({
            // datasource definition
            data: {
              type: 'local',		//remote if real url is provided
              source: {
                data: res['data']
              
              },
              pageSize: 10, // display 20 records per page
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
              input: el.find('#generalSearch'),
            },
      
            // columns definition
            columns: [
              {
                field: 'num_oc',
                title: 'Número OC',
                autoHide: false,
                template: function(row) {
                  return '<a class="kt-link link-num num-oc">'+row.num_oc+'</a>';
                }
                
              }, {
                field: 'fecha_entrega',
                title: 'Fecha entrega',
                width: 90,
              }, {
                field: 'nit_proveedor',
                title: 'Nit proveedor',
                width: 70,
              }, {
                field: 'nom_proveedor',
                title: 'Nombre proveedor',
              }, {
                field: 'monto',
                title: 'Monto',
                width: 70,
                template: function(row) {
                  return row.moneda+row.monto;
                }
              }, {
                field: 'centro_costo',
                title: 'Centro de costo',
              
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Rechazado') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Aprobado') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Generado') {
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
}
function initEvents1() {
	$('#tabla-facturas-proveedores-lista').on('click', 'a.num-oc', function () {
		g_router.navigate(['/admin/pago-proveedor/proveedor-factura-detalle']);
	});
}
function initEvents2() {
	$('#tabla-todas-facturas-proveedores').on('click', 'a.num-oc', function () {
		g_router.navigate(['/admin/pago-proveedor/proveedor-factura-detalle']);
	});
}
function initEvents3() {
	$('#nueva-factura').on('click', 'a.factura-proveedor', function () {
		g_router.navigate(['/admin/pago-proveedor/proveedor-factura']);
	});
}

