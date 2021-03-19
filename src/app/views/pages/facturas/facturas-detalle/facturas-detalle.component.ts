import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-facturas-detalle',
  templateUrl: './facturas-detalle.component.html',
  styleUrls: ['./facturas-detalle.component.scss']
})
export class FacturasDetalleComponent implements OnInit {
  KTBootstrapSelect: any;

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
    initEvents();
    initEvents1();

  }

}
function initEvents() {
	$('#factura-datos').on('click', 'a.factura-item', function () {
		g_router.navigate(['/admin/facturas/factura-item']);
	});
}
function initEvents1() {
	$('#factura-datos').on('click', 'a.factura-pago', function () {
		g_router.navigate(['/admin/facturas/factura-pago']);
	});
}