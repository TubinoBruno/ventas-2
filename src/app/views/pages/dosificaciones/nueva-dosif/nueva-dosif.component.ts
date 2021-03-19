import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LayoutConfigService } from '../../../../core/_base/layout';

import { Router, ActivatedRoute } from '@angular/router';

import { DataTableService } from '../../../../core/_base/layout/services/datatable.service';
let g_router;

declare var $: any;
declare var Morris: any;

@Component({
  selector: 'kt-nueva-dosif',
  templateUrl: './nueva-dosif.component.html',
  styleUrls: ['./nueva-dosif.component.scss']
})
export class NuevaDosifComponent implements OnInit {
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
