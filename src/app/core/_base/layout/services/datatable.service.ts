// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
// Models
import { DataTableItemModel } from '../models/datatable-item.model';

const API_DATATABLE_URL = 'api/cars';

const JSON_URL = 'assets/data/';

@Injectable()
export class DataTableService {
	/**
	 * Service Constructor
	 *
	 * @param http: HttpClient
	 */
	constructor(private http: HttpClient) { }

	/**
	 * Returns data from fake server
	 */
	getAllItems(): Observable<DataTableItemModel[]> {
		return this.http.get<DataTableItemModel[]>(API_DATATABLE_URL);
	}

	//dashboard page
	getDashboardTableData1() : Observable<any>{
		return this.http.get<any>(JSON_URL + 'workflow.json');
	}

	getDashboardTableData2() : Observable<any>{
		return this.http.get<any>(JSON_URL + 'facturas.json');
	}
	
	
	

	//benefit capacita integra
	getProveedoresPendientes() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'proveedores.json');
	}
	getContratos() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'contratos.json');
	}
	getCompras() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'compras-lista.json');
	}
	getComprasItems() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'compras-items.json');
	}
	getComprasProveedores() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'compras-proveedores.json');
	}
	getComprasCotizacionesItems() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'compras-servicios-cotiz-items.json');
	}
	getComprasPagos() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'compras-pagos.json');
	}
	getOrdenesLista() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'ordenes-lista.json');
	}
	getPedidosAlmacen() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'pedidos-almacen-lista.json');
	}
	getPedidosAlmacenItems() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'pedidos-almacen-items.json');
	}
	getFacturasProveedores() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'facturas-proveedores-lista.json');
	}
	getComprasEspItems() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'compras-especiales-items.json');
	}
	getAnticipoProveedores() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'anticipos-proveedores-lista.json');
	}
	getProveedoresAnticipo() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'proveedores-anticipo-items.json');
	}
	getPagoServicios() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'pago-servicios-lista.json');
	}
	getServiciosSelec() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'servicios-selec.json');
	}
	getServiciosImport() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'servicios-import.json');
	}
	getCajaChica() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'cajas-chicas.json');
	}
	getCajaRendicion() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'cajachica-rendicion.json');
	}
	getFondos() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'fondos-rendir.json');
	}
	getRendicion() : Observable<any> {
		return this.http.get<any>(JSON_URL + 'rendicion-items.json');
	}
}
