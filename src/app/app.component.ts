import { Component } from '@angular/core';
import {ProductServiceService} from "./services/product-service.service";
import {Product} from "./models/Product";
import {ProductBlockComponent} from "./components/product-block/product-block.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  product!: Product;

  constructor(private productService: ProductServiceService) {}

  getData() {
    this.productService.getProduit("http://localhost:8080/products/pc/34").subscribe(
      (data) => {
        this.product = data;
        console.log("let'sgoooooo")
        console.log(this.product)
      },
      (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }

  ngOnInit() {
    this.getData();
    console.log("OK")
  }
}
