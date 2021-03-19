import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
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
    initEvents();
    initEvents1();
    initEvents2();

  }
  initTable1() {
    this.service.getProductos().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-productos-pendientes');
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
                title: 'Foto',
                autoHide: false,
                width: 60,
                template: function(row) {
                  var imagen = row.imagen;
                  var output;
                  output = `
                    <div class="kt-user-card-v2">
                      <div class="kt-user-card-v2__pic">
                        <img src="assets/media/products/` + imagen + `" class="m-img-rounded kt-marginless" alt="photo">
                      </div>
                    </div>`;
                  
                  return output;
                },
              }, {
                field: 'cod_producto',
                title: 'Código',
                autoHide: false,
                width: 70,
                // callback function support for column rendering
                template: function(row) {
                  
                  return '<a class="kt-link link-num producto-detalle">' + row.cod_producto + '</a>';
                },
                
              }, {
                field: 'tipo_producto',
                title: 'Tipo',
                width: 90,
              },{
                field: 'tipo_uso',
                title: 'Uso',
                width: 70,
              
              }, {
                field: 'tipo_credito',
                title: 'Crédito',
              
              }, {
                field: 'nom_catalogo',
                title: 'Descripción',
              }, {
                field: 'rubro',
                title: 'Rubro',
                width: 70,
              }, {
                field: 'medida',
                title: 'Medida',
              }, {
                field: 'moneda',
                title: 'Moneda',
                width: 70,
              }, {
                field: 'valor',
                title: 'Valor',
                autoHide: false,
              }, {
                field: 'costo',
                title: 'Costo',
              }, {
                field: 'se_vende',
                title: 'Se vende',
              }, {
                field: 'incluye_cont',
                title: 'Contrato',
              }, {
                field: 'accesorio',
                title: 'Accesorio',
              }, {
                field: 'kardex',
                title: 'Kardex',
              }, {
                field: 'facturable',
                title: 'Facturable',
              }, {
                field: 'paquete',
                title: 'Paquete',
              }, {
                field: 'planimetria',
                title: 'Planimetría',
              }, {
                field: 'grupo_contable',
                title: 'Gr.Contable',
              }, {
                field: 'observaciones',
                title: 'Observaciones',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Inactivo') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Activo') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Por aprobar') {
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
    this.service.getProductos().subscribe(res => {
      this.KTDatatableModal2 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-todos-productos');
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
                title: 'Foto',
                autoHide: false,
                width: 60,
                template: function(row) {
                  var imagen = row.imagen;
                  var output;
                  output = `
                    <div class="kt-user-card-v2">
                      <div class="kt-user-card-v2__pic">
                        <img src="assets/media/products/` + imagen + `" class="m-img-rounded kt-marginless" alt="photo">
                      </div>
                    </div>`;
                  
                  return output;
                },
              }, {
                field: 'cod_producto',
                title: 'Código',
                autoHide: false,
                width: 70,
                // callback function support for column rendering
                template: function(row) {
                  return '<a class="kt-link link-num producto-detalle">' + row.cod_producto + '</a>';

                },
                
              }, {
                field: 'tipo_producto',
                title: 'Tipo',
                width: 90,
              },{
                field: 'tipo_uso',
                title: 'Uso',
                width: 70,
              
              }, {
                field: 'tipo_credito',
                title: 'Crédito',
              
              }, {
                field: 'nom_catalogo',
                title: 'Descripción',
              }, {
                field: 'rubro',
                title: 'Rubro',
                width: 70,
              }, {
                field: 'medida',
                title: 'Medida',
              }, {
                field: 'moneda',
                title: 'Moneda',
                width: 70,
              }, {
                field: 'valor',
                title: 'Valor',
                autoHide: false,
              }, {
                field: 'costo',
                title: 'Costo',
              }, {
                field: 'se_vende',
                title: 'Se vende',
              }, {
                field: 'incluye_cont',
                title: 'Contrato',
              }, {
                field: 'accesorio',
                title: 'Accesorio',
              }, {
                field: 'kardex',
                title: 'Kardex',
              }, {
                field: 'facturable',
                title: 'Facturable',
              }, {
                field: 'paquete',
                title: 'Paquete',
              }, {
                field: 'planimetria',
                title: 'Planimetría',
              }, {
                field: 'grupo_contable',
                title: 'Gr.Contable',
              }, {
                field: 'observaciones',
                title: 'Observaciones',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Inactivo') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Activo') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Por aprobar') {
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
      this.KTDatatableModal2.init();
    });
  }

}
function initEvents() {
  $('#new-p').on('click', 'a.new-prod', function () {
    g_router.navigate(['/admin/new-product']);
  });
}
function initEvents1() {
	$('#tabla-productos-pendientes').on('click', 'a.producto-detalle', function () {
		g_router.navigate(['/admin/product/product-detalle']);
	});
}
function initEvents2() {
	$('#tabla-todos-productos').on('click', 'a.producto-detalle', function () {
		g_router.navigate(['/admin/product/product-detalle']);
	});
}