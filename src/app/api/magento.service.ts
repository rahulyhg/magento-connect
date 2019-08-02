import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MagentoService {

  api = environment.apiURL;
  headers = {
    'Content-Type' : 'application/json',
    Authorization: environment.token
  };

  constructor(private http: HttpClient) { }

  /**
   * Productos a traves de filtros
   * @param filter string
   */
  getProduct(filter: string = null) {
    const url = `${environment.apiURL}/products/?searchCriteria${filter}`;
    return this.http.get(url, {headers: this.headers});
  }

  /**
   * Busqueda de Producto por SKU
   * @param sku string
   */
  getProductSKU(sku: string) {
    const url = `${environment.apiURL}/products/${sku}`;
    return this.http.get(url, { headers: this.headers});
  }

  /**
   * Categorias a traves de filtro
   * @param filter string
   */
  getCategories(filter: string = null) {
    const url = `${environment.apiURL}/categories?${filter}`;
    return this.http.get(url, {headers: this.headers});
  }

  /**
   * Busqueda de Categoria por ID
   * @param sku number
   */
  getCategorieID(id: number) {
    const url = `${environment.apiURL}/categories/${id}`;
    return this.http.get(url, { headers: this.headers});
  }
}
