import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
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
    this.service.getCompras().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-compras-lista');
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
                field: 'num_solicitud',
                title: 'Num. Solicitud',
                autoHide: false,
                width: 90,
                template: function(row) {
                  return '<a class="kt-link link-num solicitud-detalle">'+row.num_solicitud+'</a>';

                }
                
              }, {
                field: 'tipo_compra',
                title: 'Tipo Compra',
                width: 90,
              },{
                field: 'descripcion',
                title: 'Descripción',
              
              }, {
                field: 'monto',
                title: 'Monto Estimado',
              
              }, {
                field: 'fecha_ini',
                title: 'Fecha elaboración',
              }, {
                field: 'solicitante',
                title: 'Nombre solicitante',
                width: 70,
              }, {
                field: 'cargo_solicitante',
                title: 'Cargo Solicitante',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Rechazada') {
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
    this.service.getCompras().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-todas-compras');
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
                field: 'num_solicitud',
                title: 'Num. Solicitud',
                autoHide: false,
                width: 90,
                template: function(row) {
                  return '<a class="kt-link link-num solicitud-detalle">'+row.num_solicitud+'</a>';
                }
                
              }, {
                field: 'tipo_compra',
                title: 'Tipo Compra',
                width: 90,
              },{
                field: 'descripcion',
                title: 'Descripción',
              
              }, {
                field: 'monto',
                title: 'Monto Estimado',
              
              }, {
                field: 'fecha_ini',
                title: 'Fecha elaboración',
              }, {
                field: 'solicitante',
                title: 'Nombre solicitante',
                width: 70,
              }, {
                field: 'cargo_solicitante',
                title: 'Cargo Solicitante',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Rechazada') {
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
	$('#tabla-compras-lista').on('click', 'a.solicitud-detalle', function () {
		g_router.navigate(['/admin/compra/solicitud-detalle']);
	});
}
function initEvents2() {
	$('#tabla-todas-compras').on('click', 'a.solicitud-detalle', function () {
		g_router.navigate(['/admin/compra/solicitud-detalle']);
	});
}
function initEvents3() {
	$('#new-compra').on('click', 'a.compra-nuevo', function () {
		g_router.navigate(['/admin/compra/compras-solicitud']);
	});
}

