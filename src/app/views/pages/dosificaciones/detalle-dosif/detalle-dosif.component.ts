import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;

declare var $: any;
declare var Morris: any;
@Component({
  selector: 'kt-detalle-dosif',
  templateUrl: './detalle-dosif.component.html',
  styleUrls: ['./detalle-dosif.component.scss']
})
export class DetalleDosifComponent implements OnInit {

  KTBootstrapSelect: any;

  constructor() { }

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
  }

}
