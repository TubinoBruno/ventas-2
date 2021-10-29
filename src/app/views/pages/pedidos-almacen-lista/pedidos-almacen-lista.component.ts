import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-pedidos-almacen-lista',
  templateUrl: './pedidos-almacen-lista.component.html',
  styleUrls: ['./pedidos-almacen-lista.component.scss']
})
export class PedidosAlmacenListaComponent implements OnInit {
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
    this.service.getPedidosAlmacen().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-pedidos-almacen-lista');
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
                field: 'nombre',
                title: 'Nombre',
                autoHide: false,
                template: function(row) {
                  return '<a  class="kt-link link-num nombre">'+row.nombre+'</a>';
                }
                
              }, {
                field: 'cargo',
                title: 'Cargo',
              },{
                field: 'area',
                title: 'Area',
              
              }, {
                field: 'fecha',
                title: 'Fecha',
              }, {
                field: 'superior',
                title: 'Inmed. Superior',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Rechazado') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Entregado') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Ingresado') {
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
    this.service.getPedidosAlmacen().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-todos-pedidos-almacen');
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
                field: 'nombre',
                title: 'Nombre',
                autoHide: false,
                template: function(row) {
                  return '<a  class="kt-link link-num nombre">'+row.nombre+'</a>';
                }
                
              }, {
                field: 'cargo',
                title: 'Cargo',
              },{
                field: 'area',
                title: 'Area',
              
              }, {
                field: 'fecha',
                title: 'Fecha',
              }, {
                field: 'superior',
                title: 'Inmed. Superior',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Rechazado') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Entregado') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Ingresado') {
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
	$('#tabla-pedidos-almacen-lista').on('click', 'a.nombre', function () {
		g_router.navigate(['/admin/pedido-almacen/pedidos-almacen-solicitud-detalle']);
	});
}
function initEvents2() {
	$('#tabla-todos-pedidos-almacen').on('click', 'a.nombre', function () {
		g_router.navigate(['/admin/pedido-almacen/pedidos-almacen-solicitud-detalle']);
	});
}
function initEvents3() {
	$('#new-pedido').on('click', 'a.nuevo-pedido', function () {
		g_router.navigate(['/admin/pedido-almacen/pedidos-almacen-solicitud']);
	});
}