import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
declare var $: any;
declare var Morris: any;
declare var swal: any;
let g_router;
@Component({
  selector: 'kt-compras-orden',
  templateUrl: './compras-orden.component.html',
  styleUrls: ['./compras-orden.component.scss']
})
export class ComprasOrdenComponent implements OnInit {
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
    this.initTable3();

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
    var KTSweetAlert2Demo1 = function () {

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
    var KTSweetAlert2Demo2 = function () {

      var initSaffiroReclutamiento = function () {

        $('#btn-aprobar-procesoi').click(function (e) {
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
				$('#fecha_entrega').datepicker({
					rtl: KTUtil.isRTL(),
					todayHighlight: true,
					orientation: "bottom left",
					templates: arrows,
					language: "es-ES"
				});
			}
      var rrhh3 = function () {
				// input group layout 
				$('#fecha_ini').datepicker({
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
    KTSweetAlert2Demo1.init();
    KTSweetAlert2Demo2.init();
    initEvents2();
    initEvents3();
    initEvents4();
    initEvents5();

  }

  initTable1() {
    this.service.getComprasPagos().subscribe(res => {
      this.KTDatatableModal1 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-compras-pagos');
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
                width: 50,
                // callback function support for column rendering
                
              }, {
                field: 'monto',
                title: 'Monto',
              }, {
                field: 'porcentaje',
                title: 'Porcentaje',
                
              }, {
                field: 'condicion',
                title: 'Condición',
              }, {
                field: 'autorizacion',
                title: 'Autorización',
              }, {
                field: 'forma_pago',
                title: 'Forma pago',
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
    this.service.getComprasItems().subscribe(res => {
      this.KTDatatableModal2 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-compras-items');
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
					// callback function support for column rendering
					
				}, {
					field: 'nombre',
					title: 'Nombre',
				}, {
					field: 'categoria',
					title: 'Categoría',
				}, {
					field: 'precio_unit',
					title: 'Precio Unit.',
					
					width: 90,
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
					field: 'centro_costo',
					title: 'Centro costo',
				}, {
					field: 'proyecto',
					title: 'Proyecto',
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
  initTable3() {
    this.service.getOrdenesLista().subscribe(res => {
      this.KTDatatableModal3 = function () {
        var subRemoteTablaFuncionarios = function () {
          var el = $('#tabla-ordenes-compra');
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
                field: 'num_orden',
                title: 'Num. Orden',
                autoHide: false,
                width: 70,
                template: function(row) {
                  return '<a class="kt-link link-num num-orden">'+row.num_orden+'</a>';
                }
                
              }, {
                field: 'num_secuencia',
                title: 'Num. Secuencia',
                width: 90,
              },{
                field: 'nit_proveedor',
                title: 'Nit Proveedor',
              },{
                field: 'nom_proveedor',
                title: 'Nombre Proveedor',
              }, {
                field: 'monto',
                title: 'Monto compra',
              
              }, {
                field: 'fecha_contable',
                title: 'Fecha contable',
              }, {
                field: 'fecha_entrega',
                title: 'Fecha entrega',
              }, {
                field: 'estado',
                title: 'Estado',
                autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                  if (row.estado == 'Anulado') {
                    status = 'kt-badge--danger';
                  } else if(row.estado == 'Vigente') {
                    status = 'kt-badge--success';
                  } else if(row.estado == 'Vencido') {
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
      this.KTDatatableModal3.init();
    });
  }

}
function initEvents2() {
	$('#menu-com').on('click', 'a.propuestas', function () {
		g_router.navigate(['/admin/compra/propuestas']);
	});
}
function initEvents3() {
	$('#menu-com').on('click', 'a.solicitud', function () {
		g_router.navigate(['/admin/compra/compras-solicitud']);
	});
}
function initEvents4() {
	$('#menu-com').on('click', 'a.comparativo', function () {
		g_router.navigate(['/admin/compra/comparativa']);
	});
}
function initEvents5() {
	$('#tabla-ordenes-compra').on('click', 'a.num-orden', function () {
		g_router.navigate(['/admin/orden-compra/orden-detalle']);
	});
}