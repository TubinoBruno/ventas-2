import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;
declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-caja-pago-detalle',
  templateUrl: './caja-pago-detalle.component.html',
  styleUrls: ['./caja-pago-detalle.component.scss']
})
export class CajaPagoDetalleComponent implements OnInit {

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
	$('#caja-pago-data').on('click', 'a.caja-pago-item', function () {
		g_router.navigate(['/admin/cajas/caja-pago-item']);
	});
}
function initEvents1() {
	$('#caja-pago-data').on('click', 'a.caja-pago-registro', function () {
		g_router.navigate(['/admin/cajas/caja-pago-registro']);
	});
}