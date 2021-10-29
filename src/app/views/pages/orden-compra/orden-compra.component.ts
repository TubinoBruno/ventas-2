import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-orden-compra',
  templateUrl: './orden-compra.component.html',
  styleUrls: ['./orden-compra.component.scss']
})
export class OrdenCompraComponent implements OnInit {
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
    this.service.getOrdenesLista().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-ordenes-lista');
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
                field: 'num_orden',
                title: 'Num. Orden',
                autoHide: false,
                width: 70,
                template: function(row) {
                  return '<a class="kt-link link-num num-orden">'+row.num_orden+'</a>';
                }
                
              }, {
                field: 'num_secuencia',
                title: 'Num. Secuencia',
                width: 90,
              },{
                field: 'nit_proveedor',
                title: 'Nit Proveedor',
              },{
                field: 'nom_proveedor',
                title: 'Nombre Proveedor',
              }, {
                field: 'monto',
                title: 'Monto compra',
              
              }, {
                field: 'fecha_contable',
                title: 'Fecha contable',
              }, {
                field: 'fecha_entrega',
                title: 'Fecha entrega',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Anulado') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Vigente') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Vencido') {
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
    this.service.getOrdenesLista().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-todas-ordenes');
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
                field: 'num_orden',
                title: 'Num. Orden',
                autoHide: false,
                width: 70,
                template: function(row) {
                  return '<a class="kt-link link-num num-orden">'+row.num_orden+'</a>';
                }
                
              }, {
                field: 'num_secuencia',
                title: 'Num. Secuencia',
                width: 90,
              },{
                field: 'nit_proveedor',
                title: 'Nit Proveedor',
              },{
                field: 'nom_proveedor',
                title: 'Nombre Proveedor',
              }, {
                field: 'monto',
                title: 'Monto compra',
              
              }, {
                field: 'fecha_contable',
                title: 'Fecha contable',
              }, {
                field: 'fecha_entrega',
                title: 'Fecha entrega',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Anulado') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Vigente') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Vencido') {
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
	$('#tabla-ordenes-lista').on('click', 'a.num-orden', function () {
		g_router.navigate(['/admin/orden-compra/orden-detalle']);
	});
}
function initEvents2() {
	$('#tabla-todas-ordenes').on('click', 'a.num-orden', function () {
		g_router.navigate(['/admin/orden-compra/orden-detalle']);
	});
}
function initEvents3() {
	$('#new-orden').on('click', 'a.orden-nuevo', function () {
		g_router.navigate(['/admin/orden-compra/orden-solicitud']);
	});
}

