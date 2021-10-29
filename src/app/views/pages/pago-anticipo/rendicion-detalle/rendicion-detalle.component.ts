import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
declare var $: any;
declare var Morris: any;
declare var swal: any;
let g_router;
@Component({
  selector: 'kt-rendicion-detalle',
  templateUrl: './rendicion-detalle.component.html',
  styleUrls: ['./rendicion-detalle.component.scss']
})
export class RendicionDetalleComponent implements OnInit {
  KTBootstrapSelect: any;
  KTDatatableModal1: any;
  KTDatatableModal2: any;
  KTDatatableModal3: any;

  KTBootstrapDatepicker: any;
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
    var KTSweetAlert2Demo2 = function () {

      var initSaffiroReclutamiento = function () {

        $('#btn-aprobar-proceso').click(function (e) {
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
				$('#fecha_inic').datepicker({
					rtl: KTUtil.isRTL(),
					todayHighlight: true,
					orientation: "bottom left",
					templates: arrows,
					language: "es-ES"
				});
			}
      var rrhh1 = function () {
				// input group layout 
				$('#fecha_fin').datepicker({
					rtl: KTUtil.isRTL(),
					todayHighlight: true,
					orientation: "bottom left",
					templates: arrows,
					language: "es-ES"
				});
			}
      var rrhh2 = function () {
				// input group layout 
				$('#fecha_limite').datepicker({
					rtl: KTUtil.isRTL(),
					todayHighlight: true,
					orientation: "bottom left",
					templates: arrows,
					language: "es-ES"
				});
			}
      var rrhh3 = function () {
				// input group layout 
				$('#fecha_factura').datepicker({
					rtl: KTUtil.isRTL(),
					todayHighlight: true,
					orientation: "bottom left",
					templates: arrows,
					language: "es-ES"
				});
			}
      var rrhh4 = function () {
				// input group layout 
				$('#fecha_contable').datepicker({
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
          rrhh2();
          rrhh3();
          rrhh4();

				}
			};
		}();
		this.KTBootstrapDatepicker.init();
    KTSweetAlert2Demo.init();
    KTSweetAlert2Demo2.init();
    // initEvents2();
    initEvents3();
    initEvents4();
    // initEvents5();

  }
  initTable1() {
    this.service.getProveedoresAnticipo().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-proveedor-anticipo-items');
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
                field: 'fecha_doc',
                title: 'Fecha documento',
                autoHide: false,
                width: 50,
              }, {
                field: 'tipo_doc',
                title: 'Tipo documento',
              }, {
                field: 'concepto',
                title: 'Concepto',
              }, {
                field: 'grupo_gasto',
                title: 'Grupo gasto',
              }, {
                field: 'importe',
                title: 'Importe',
              }, {
                field: 'centro_costo',
                title: 'Centro costo',
              }, {
                field: 'importe_base',
                title: 'Importe base',
              }, {
                field: 'descuento',
                title: 'Descuento',
              }, {
                field: 'excento',
                title: 'Excento',
              }, {
                field: 'ice',
                title: 'ICE',
              }, {
                field: 'proyecto',
                title: 'Proyecto',
              }, {
                field: 'autorizacion',
                title: 'Autorización',
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
  s

}
function initEvents3() {
	$('#menu-ant').on('click', 'a.datos', function () {
		g_router.navigate(['/admin/pago-anticipo/proveedor-anticipo-detalle']);
	});
}
function initEvents2() {
	$('#menu-ant').on('click', 'a.rendicion', function () {
		g_router.navigate(['/admin/pago-anticipo/rendicion-detalle']);
	});
}
function initEvents4() {
	$('#menu-ant').on('click', 'a.anticipo', function () {
		g_router.navigate(['/admin/pago-anticipo/anticipo-detalle']);
	});
}