import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
declare var $: any;
declare var Morris: any;
declare var swal: any;
let g_router;
@Component({
  selector: 'kt-compras-cotizaciones-items',
  templateUrl: './compras-cotizaciones-items.component.html',
  styleUrls: ['./compras-cotizaciones-items.component.scss']
})
export class ComprasCotizacionesItemsComponent implements OnInit {
  KTBootstrapSelect: any;
  KTBootstrapDatepicker: any;
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
    var KTSweetAlert2Demo = function () {

      var initSaffiroReclutamiento = function () {

        $('#btn-guardar-proceso').click(function (e) {
          swal.fire({
            title: 'Está seguro?',
            text: "No podrá deshacer esta acción!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, guardar!'
          }).then(function (result) {
            if (result.value) {
              swal.fire(
                'Guardado!',
                'Los datos fueron guardados con éxito.',
                'success'
              )
            }
          });
        });
      };

      return {
        // Init
        init: function () {
          initSaffiroReclutamiento();
        },
      };
    }();
    this.KTBootstrapDatepicker = function () {

			var arrows;
			if (KTUtil.isRTL()) {
				arrows = {
					leftArrow: '<i class="la la-angle-right"></i>',
					rightArrow: '<i class="la la-angle-left"></i>'
				}
			} else {
				arrows = {
					leftArrow: '<i class="la la-angle-left"></i>',
					rightArrow: '<i class="la la-angle-right"></i>'
				}
			}

			$.fn.datepicker.dates['es-ES'] = {
				days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
				daysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
				daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
				months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
				monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
				today: "Hoy",
				clear: "Borrar",
				format: "dd-M-yyyy",
				titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
				weekStart: 1
			};

			var rrhh = function () {
				// input group layout 
				$('#fecha_recision').datepicker({
					rtl: KTUtil.isRTL(),
					todayHighlight: true,
					orientation: "bottom left",
					templates: arrows,
					language: "es-ES"
				});
			}
      var rrhh1 = function () {
				// input group layout 
				$('#fecha_entrega').datepicker({
					rtl: KTUtil.isRTL(),
					todayHighlight: true,
					orientation: "bottom left",
					templates: arrows,
					language: "es-ES"
				});
			}

			return {
				// public functions
				init: function () {
					//demos(); 
					rrhh();
          rrhh1();

				}
			};
		}();
		this.KTBootstrapDatepicker.init();
    KTSweetAlert2Demo.init();
    initEvents2();
    initEvents3();
    initEvents4();
    initEvents5();
    initEvents6();

  }
  initTable1() {
    this.service.getComprasCotizacionesItems().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-compras-servicios-cotiz-items');
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
                field: '',
                title: '#',
                sortable: false,
                width: 20,
                type: 'number',
                selector: {class: 'kt-checkbox--solid'},
                textAlign: 'center',
              }, {
                field: 'item',
                title: 'Item',
                autoHide: false,
                width: 60,
                // callback function support for column rendering
                
              }, {
                field: 'nombre',
                title: 'Descripción',
              }, {
                field: 'precio_unit',
                title: 'Precio Unit.',
                template: function(row) {
                  var precio = row.precio_unit;
                  return 'Bs.'+precio;
                          },
              }, {
                field: 'cantidad',
                title: 'Cantidad',
                width: 70,
              
              }, {
                field: 'subtotal',
                title: 'Subtotal',
                width: 70,
                autoHide: false,
                template: function(row) {
                  var subtotal = row.subtotal;
                  return 'Bs.'+subtotal;
                          },
              }, {
                field: 'calidad',
                title: 'Calidad',
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
//tabla-compras-proveedores
}
function initEvents2() {
	$('#menu-compra').on('click', 'a.solicitud-compra', function () {
		g_router.navigate(['/admin/compra/solicitud-detalle']);
	});
}
function initEvents3() {
	$('#menu-compra').on('click', 'a.orden-compra', function () {
		g_router.navigate(['/admin/compra/compras-orden-detalle']);
	});
}
function initEvents4() {
	$('#menu-compra').on('click', 'a.cuadro-comparativo', function () {
		g_router.navigate(['/admin/compra/compras-comparativa-detalle']);
	});
}
function initEvents5() {
	$('#tabla-compras-proveedores').on('click', 'a.nit_prov', function () {
		g_router.navigate(['/admin/compra/compras-comparativa-detalle']);
	});
}
function initEvents6() {
	$('#menu-compra').on('click', 'a.registro-propuestas', function () {
		g_router.navigate(['/admin/compra/compras-propuestas-detalle']);
	});
}
