import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-pago-anticipo',
  templateUrl: './pago-anticipo.component.html',
  styleUrls: ['./pago-anticipo.component.scss']
})
export class PagoAnticipoComponent implements OnInit {
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
    this.service.getAnticipoProveedores().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-anticipos-proveedores-lista');
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
                field: 'num_doc',
                title: 'Número Doc',
                autoHide: false,
                template: function(row) {
                  return '<a class="kt-link link-num num-doc">'+row.num_doc+'</a>';
                }
                
              }, {
                field: 'num_secuencia',
                title: 'Num Secuencia',
                width: 90,
              }, {
                field: 'doc_referencia',
                title: 'Documento ref.',
              }, {
                field: 'fecha_contable',
                title: 'Fecha Contable',
              }, {
                field: 'nom_solicitante',
                title: 'Nombre solicitante',
                
              }, {
                field: 'cargo_solicitante',
                title: 'Cargo solicitante',
              }, {
                field: 'nom_aprobacion',
                title: 'Nombre aprobación',
                
              }, {
                field: 'cargo_aprobacion',
                title: 'Cargo aprobación',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Pagada') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Aprobada') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Generada') {
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
    this.service.getAnticipoProveedores().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-todos-anticipos-proveedores');
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
                field: 'num_doc',
                title: 'Número Doc',
                autoHide: false,
                template: function(row) {
                  return '<a class="kt-link link-num num-doc">'+row.num_doc+'</a>';
                }
                
              }, {
                field: 'num_secuencia',
                title: 'Num Secuencia',
                width: 90,
              }, {
                field: 'doc_referencia',
                title: 'Documento ref.',
              }, {
                field: 'fecha_contable',
                title: 'Fecha Contable',
              }, {
                field: 'nom_solicitante',
                title: 'Nombre solicitante',
                
              }, {
                field: 'cargo_solicitante',
                title: 'Cargo solicitante',
              }, {
                field: 'nom_aprobacion',
                title: 'Nombre aprobación',
                
              }, {
                field: 'cargo_aprobacion',
                title: 'Cargo aprobación',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Pagada') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Aprobada') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Generada') {
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
	$('#tabla-anticipos-proveedores-lista').on('click', 'a.num-doc', function () {
		g_router.navigate(['/admin/pago-anticipo/proveedor-anticipo-detalle']);
	});
}
function initEvents2() {
	$('#tabla-todos-anticipos-proveedores').on('click', 'a.num-doc', function () {
		g_router.navigate(['/admin/pago-anticipo/proveedor-anticipo-detalle']);
	});
}
function initEvents3() {
	$('#factura-n').on('click', 'a.nueva-f', function () {
		g_router.navigate(['/admin/pago-anticipo/proveedor-anticipo']);
	});
}