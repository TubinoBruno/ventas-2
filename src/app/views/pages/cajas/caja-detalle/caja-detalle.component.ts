import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-caja-detalle',
  templateUrl: './caja-detalle.component.html',
  styleUrls: ['./caja-detalle.component.scss']
})
export class CajaDetalleComponent implements OnInit {
  KTDatatableModal1: any;
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
	$('#caja-data').on('click', 'a.pago-caja', function () {
		g_router.navigate(['/admin/cajas/caja-pagos']);
	});
}
function initEvents1() {
	$('#new-d').on('click', 'a.new-paga', function () {
		g_router.navigate(['/admin/new-pago']);
	});
}