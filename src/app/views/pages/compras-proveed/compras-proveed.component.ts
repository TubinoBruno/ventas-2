import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-compras-proveed',
  templateUrl: './compras-proveed.component.html',
  styleUrls: ['./compras-proveed.component.scss']
})
export class ComprasProveedComponent implements OnInit {
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
    this.service.getProveedoresPendientes().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-proveedores-pendientes');
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
                field: 'nit_ci',
                title: 'NIT/CI',
                autoHide: false,
                width: 90,
                // callback function support for column rendering
                template: function(row) {
                  
                  return '<a class="kt-link link-num proveedor-detalle">' + row.nit_ci + '</a>';
                },
                
              }, {
                field: 'cod_proveedor',
                title: 'Cod Proveedor',
                width: 90,
              },{
                field: 'nombre_razon',
                title: 'Nombre/Razón social',
              
              }, {
                field: 'tipo_sociedad',
                title: 'Tipo sociedad',
              
              }, {
                field: 'tipo_persona',
                title: 'Tipo persona',
              }, {
                field: 'tel_fijo',
                title: 'Tel. Fijo',
                width: 70,
              }, {
                field: 'tel_celu',
                title: 'Celular',
              }, {
                field: 'email',
                title: 'Email',
              }, {
                field: 'banco',
                title: 'Banco',
              }, {
                field: 'cuenta',
                title: 'N.Cuenta',
              }, {
                field: 'tipo_cuenta',
                title: 'Tipo cuenta',
              }, {
                field: 'moneda',
                title: 'Moneda',
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
    this.service.getProveedoresPendientes().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-todos-proveedores');
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
                field: 'nit_ci',
                title: 'NIT/CI',
                autoHide: false,
                width: 70,
                // callback function support for column rendering
                template: function(row) {
                  
                  return '<a class="kt-link link-num proveedor-detalle">' + row.nit_ci + '</a>';
                },
                
              }, {
                field: 'cod_proveedor',
                title: 'Cod Proveedor',
                width: 90,
              },{
                field: 'nombre_razon',
                title: 'Nombre/Razón social',
              
              }, {
                field: 'tipo_sociedad',
                title: 'Tipo sociedad',
              
              }, {
                field: 'tipo_persona',
                title: 'Tipo persona',
              }, {
                field: 'tel_fijo',
                title: 'Tel. Fijo',
                width: 70,
              }, {
                field: 'tel_celu',
                title: 'Celular',
              }, {
                field: 'email',
                title: 'Email',
              }, {
                field: 'banco',
                title: 'Banco',
              }, {
                field: 'cuenta',
                title: 'N.Cuenta',
              }, {
                field: 'tipo_cuenta',
                title: 'Tipo cuenta',
              }, {
                field: 'moneda',
                title: 'Moneda',
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
	$('#tabla-proveedores-pendientes').on('click', 'a.proveedor-detalle', function () {
		g_router.navigate(['/admin/proveed/proveedor-detalle']);
	});
}
function initEvents2() {
	$('#tabla-todos-proveedores').on('click', 'a.proveedor-detalle', function () {
		g_router.navigate(['/admin/proveed/proveedor-detalle']);
	});
}
function initEvents3() {
	$('#new-p').on('click', 'a.proveedor-nuevo', function () {
		g_router.navigate(['/admin/proveed/proveedor-nuevo']);
	});
}