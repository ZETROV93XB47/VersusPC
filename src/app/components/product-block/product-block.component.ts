import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product";

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss']
})
export class ProductBlockComponent {
  //@Input() productData!: Product;

  receivedProductData!: Product;

  handleChildData(data: Product): Product {
    this.receivedProductData = data;
    console.log("ok this is data value");
    return data;
    //console.log(data)
  }
}
