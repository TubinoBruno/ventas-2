import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-producto-precio-nuevo',
  templateUrl: './producto-precio-nuevo.component.html',
  styleUrls: ['./producto-precio-nuevo.component.scss']
})
export class ProductoPrecioNuevoComponent implements OnInit {

  KTBootstrapSelect: any;
  KTBootstrapDatepicker: any;

  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router: Router) {
    g_router = router;
  }
  ngOnInit() {
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
				$('#fecha_ini').datepicker({
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

    initEvents();
    initEvents1();
  }

}
function initEvents() {
	$('#product-link').on('click', 'a.product-detalle', function () {
		g_router.navigate(['/admin/product/product-detalle']);
	});
}
function initEvents1() {
	$('#product-link').on('click', 'a.product-historial', function () {
		g_router.navigate(['/admin/product/product-historial-precio']);
	});
}
