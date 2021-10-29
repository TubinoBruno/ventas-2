import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
declare var $: any;
declare var Morris: any;
declare var swal: any;
let g_router;
@Component({
  selector: 'kt-caja-chica-detalle',
  templateUrl: './caja-chica-detalle.component.html',
  styleUrls: ['./caja-chica-detalle.component.scss']
})
export class CajaChicaDetalleComponent implements OnInit {
  KTBootstrapSelect: any;
  KTDatatableModal1: any;
  KTDatatableModal2: any;
  KTDatatableModal3: any;

  KTBootstrapDatepicker: any;
  constructor(private layoutConfigService: LayoutConfigService, private service: DataTableService, private router: Router) {
    g_router = router;
  }
  ngOnInit() {
	// this.initTable2();
  //   this.initTable1();
  //   this.initTable3();

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
    

      
    initEvents2();
     initEvents3();
    //  initEvents1();
    // initEvents5();

  }

}
function initEvents1() {
	$('#menu-c').on('click', 'a.caja-chica-detalle', function () {
		g_router.navigate(['/admin/listado-caja/caja-detalle']);
	});
}
function initEvents2() {
	$('#menu-c').on('click', 'a.solicitud', function () {
		g_router.navigate(['/admin/listado-caja/solicitud-detalle']);
	});
}
function initEvents3() {
	$('#menu-c').on('click', 'a.rendicion', function () {
		g_router.navigate(['/admin/listado-caja/rendicion-detalle']);
	});
}