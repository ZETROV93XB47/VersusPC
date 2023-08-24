import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
//import { YourDataService } from './your-data.service';
import {ProductServiceService} from "../services/product-service.service";
import {Product} from "../models/Product"; // Replace with your data service

@Injectable({
    providedIn: 'root'
})
export class ProductResolverService implements Resolve<Observable<Product>> {
    constructor(private productService: ProductServiceService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        //return this.productService.getProduit("http://localhost:8080/products/pc/6");
        console.log("http://localhost:8080/products/pc/"+route.paramMap.get('id'));
        return this.productService.getProduit("http://localhost:8080/products/pc/"+route.paramMap.get('id'));
    }
}
