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
	$('#product-link').on('click', 'a.product-detalle', function () {
		g_router.navigate(['/admin/product/product-detalle']);
	});
}
function initEvents1() {
	$('#product-link').on('click', 'a.product-historial', function () {
		g_router.navigate(['/admin/product/product-historial-precio']);
	});
}
