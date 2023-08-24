import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss']
})
export class ProductBlockComponent {
  //@Input() productData!: Product;

  receivedProductData!: Product;
  resolvedData!: Product;

  constructor(private route: ActivatedRoute) {
    this.resolvedData = this.route.snapshot.data['resolvedData'];
    //console.log(this.resolvedData);
    //console.log(this.route.snapshot.data);
  }

  handleChildData(data: Product): Product {
    this.receivedProductData = data;
    console.log("ok this is data value");
    return data;
  }
}
