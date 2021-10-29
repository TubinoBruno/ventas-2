import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
declare var $: any;
declare var Morris: any;
declare var swal: any;
let g_router;
@Component({
  selector: 'kt-listado-caja',
  templateUrl: './listado-caja.component.html',
  styleUrls: ['./listado-caja.component.scss']
})
export class ListadoCajaComponent implements OnInit {
  KTBootstrapSelect: any;
  KTDatatableModal1: any;
  KTDatatableModal2: any;
  KTDatatableModal3: any;

  KTBootstrapDatepicker: any;
  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router: Router) {
    g_router = router;
  }
  ngOnInit() {
	this.initTable2();
    this.initTable1();
  //   this.initTable3();

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
    

      
    initEvents2();
     initEvents3();
     initEvents1();
    // initEvents5();

  }
  initTable1() {
    this.service.getCajaChica().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-cajas-pendientes');
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
                field: 'documento',
                title: 'Documento',
                autoHide: false,
                width: 70,
                // callback function support for column rendering
                template: function(row) {
                  
                  return '<a class="kt-link link-num documento">' + row.documento + '</a>';
                },
                
              }, {
                field: 'fecha_contable',
                title: 'Fecha contable',
              },{
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
                field: 'monto',
                title: 'Monto',
              }, {
                field: 'reposicion_porc',
                title: '% reposición',
              }, {
                field: 'reposicion_monto',
                title: 'Monto reposición',
              }, {
                field: 'observaciones',
                title: 'Observaciones',
              }, {
                field: 'centro_costo',
                title: 'Centro costo',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Anulada') {
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
    this.service.getCajaChica().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-todas-cajas');
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
                field: 'documento',
                title: 'Documento',
                autoHide: false,
                width: 70,
                // callback function support for column rendering
                template: function(row) {
                  
                  return '<a class="kt-link link-num documento">' + row.documento + '</a>';
                },
                
              }, {
                field: 'fecha_contable',
                title: 'Fecha contable',
              },{
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
                field: 'monto',
                title: 'Monto',
              }, {
                field: 'reposicion_porc',
                title: '% reposición',
              }, {
                field: 'reposicion_monto',
                title: 'Monto reposición',
              }, {
                field: 'observaciones',
                title: 'Observaciones',
              }, {
                field: 'centro_costo',
                title: 'Centro costo',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Anulada') {
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
	$('#tabla-cajas-pendientes').on('click', 'a.documento', function () {
		g_router.navigate(['/admin/listado-caja/caja-detalle']);
	});
}
function initEvents2() {
	$('#tabla-todas-cajas').on('click', 'a.documento', function () {
		g_router.navigate(['/admin/listado-caja/caja-detalle']);
	});
}
function initEvents3() {
	$('#nueva-caja').on('click', 'a.caja', function () {
		g_router.navigate(['/admin/caja-chica']);
	});
}
