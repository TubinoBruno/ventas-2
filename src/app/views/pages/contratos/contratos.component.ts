import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {
  KTBootstrapSelect: any;
  KTDatatableModal1: any;
  KTDatatableModal2: any;

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
    // initEvents();
    initEvents1();
    initEvents2();
    initEvents3();

  }
  initTable1() {
    this.service.getContratos().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-contratos-pendientes');
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
                field: 'num_contrato',
                title: 'Num Contratro',
                autoHide: false,
                width: 70,
                // callback function support for column rendering
                template: function(row) {
                  return '<a class="kt-link link-num contrato-detalle">' + row.num_contrato + '</a>';
                },
                
              }, {
                field: 'tipo_contrato',
                title: 'Tipo Contrato',
                width: 90,
              },{
                field: 'concepto',
                title: 'Concepto',
              
              }, {
                field: 'monto',
                title: 'Monto',
                template: function(row) {
                  return row.moneda + row.monto;
                },
              }, {
                field: 'fecha_ini',
                title: 'Fecha Inicial',
              }, {
                field: 'fecha_fin',
                title: 'Fecha Fin',
              }, {
                field: 'version',
                title: 'Version',
              }, {
                field: 'nom_cliente',
                title: 'Nombre Cliente',
              }, {
                field: 'ci_nit',
                title: 'CI/NIT',
              }, {
                field: 'modificacion',
                title: 'Tipo Modif',
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
    this.service.getContratos().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-todos-contratos');
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
                field: 'num_contrato',
                title: 'Num Contratro',
                autoHide: false,
                width: 70,
                // callback function support for column rendering
                template: function(row) {
                  return '<a class="kt-link link-num contrato-detalle">' + row.num_contrato + '</a>';
                },
                
              }, {
                field: 'tipo_contrato',
                title: 'Tipo Contrato',
                width: 90,
              },{
                field: 'concepto',
                title: 'Concepto',
              
              }, {
                field: 'monto',
                title: 'Monto',
                template: function(row) {
                  return row.moneda + row.monto;
                },
              }, {
                field: 'fecha_ini',
                title: 'Fecha Inicial',
              }, {
                field: 'fecha_fin',
                title: 'Fecha Fin',
              }, {
                field: 'version',
                title: 'Version',
              }, {
                field: 'nom_cliente',
                title: 'Nombre Cliente',
              }, {
                field: 'ci_nit',
                title: 'CI/NIT',
              }, {
                field: 'modificacion',
                title: 'Tipo Modif',
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
	$('#tabla-contratos-pendientes').on('click', 'a.contrato-detalle', function () {
		g_router.navigate(['/admin/contrato/contrato-detalle']);
	});
}
function initEvents2() {
	$('#tabla-todos-contratos').on('click', 'a.contrato-detalle', function () {
		g_router.navigate(['/admin/contrato/contrato-detalle']);
	});
}
function initEvents3() {
	$('#new-c').on('click', 'a.contrato-nuevo', function () {
		g_router.navigate(['/admin/contrato/contrato-nuevo']);
	});
}
