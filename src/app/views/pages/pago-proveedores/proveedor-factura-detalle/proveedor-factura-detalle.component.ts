import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
declare var $: any;
declare var Morris: any;
declare var swal: any;
let g_router;
@Component({
  selector: 'kt-proveedor-factura-detalle',
  templateUrl: './proveedor-factura-detalle.component.html',
  styleUrls: ['./proveedor-factura-detalle.component.scss']
})
export class ProveedorFacturaDetalleComponent implements OnInit {
  KTBootstrapSelect: any;
  KTDatatableModal1: any;
  KTDatatableModal2: any;
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
    initEvents1();

    initEvents2();
    initEvents3();
    initEvents4();
    initEvents5();
  }

  
  initTable1() {
    this.service.getComprasEspItems().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-compras-especiales-items');
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
                field: 'item',
                title: 'Item',
                autoHide: false,
                width: 50,
              }, {
                field: 'descripcion',
                title: 'Descripción',
              }, {
                field: 'precio_unit',
                title: 'Precio Unit.',
                template: function(row) {
                  var precio = row.precio_unit;
                  return 'Bs.'+precio;
                          },
                width: 90,
              }, {
                field: 'moneda',
                title: 'Moneda',
                width: 70,
              }, {
                field: 'cantidad',
                title: 'Cantidad',
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
                field: 'almacen',
                title: 'Almacen',
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

function initEvents2() {
	$('#menu-ocp').on('click', 'a.solicitud-pago', function () {
		g_router.navigate(['/admin/pago-proveedor/solicitud-pago-detalle']);
	});
}
function initEvents3() {
	$('#menu-ocp').on('click', 'a.cuenta-pagar', function () {
		g_router.navigate(['/admin/pago-proveedor/cuenta-pagar-detalle']);
	});
}
function initEvents4() {
	$('#menu-ocp').on('click', 'a.asignacion-bancaria', function () {
		g_router.navigate(['/admin/pago-proveedor/asignacion-bancaria-detalle']);
	});
}
function initEvents5() {
	$('#menu-ocp').on('click', 'a.transferencia', function () {
		g_router.navigate(['/admin/pago-proveedor/transferencia-detalle']);
	});
}
function initEvents1() {
	$('#menu-ocp').on('click', 'a.cheque', function () {
		g_router.navigate(['/admin/pago-proveedor/cheque-detalle']);
	});
}
