import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../core/_base/layout/services/datatable.service';
let g_router;

declare var $: any;
declare var Morris: any;

@Component({
  selector: 'kt-new-factura',
  templateUrl: './new-factura.component.html',
  styleUrls: ['./new-factura.component.scss']
})
export class NewFacturaComponent implements OnInit {
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
  }

}
function initEvents() {
	$('#dato-factura').on('click', 'a.item-factura', function () {
		g_router.navigate(['/admin/new-factura/detalle-factura']);
	});
}