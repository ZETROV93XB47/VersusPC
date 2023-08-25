import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../models/Product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private HOME_PRODUCTS_URL = "http://localhost:8080/products/pc/getHomeProducts";

  constructor(private httpClient: HttpClient) {}

  getProduit(productApiUrl: string): Observable<Product> {
    return this.httpClient.get<Product>(productApiUrl);
  }

  getHomeProducts():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.HOME_PRODUCTS_URL);
  }

  /*
  post(url: string, body: any): Observable<any> {
    return this.httpClient.post(url, body);
  }

  put(url: string, body: any): Observable<any> {
    return this.httpClient.put(url, body);
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(url);
  }
  */
}
