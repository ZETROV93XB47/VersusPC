import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss']
})
export class ProductBlockComponent {
  @Input() productData!: Product;

  constructor(private router: Router, private route: ActivatedRoute) {
    //this.resolvedData = this.route.snapshot.data['resolvedData'];
    //console.log(this.route.snapshot.data);
    //console.log(this.resolvedData);
  }

  /*handleChildData(data: Product): Product {
    this.receivedProductData = data;
    console.log("ok this is data value");
    return data;
  }*/


  onSubmit() {
    if(this.router.url === "/home") {
      this.router.navigate(['../productPage', this.productData.id], { relativeTo: this.route })
          .then(() => {
            window.location.reload();
          });
    }
    this.router.navigate(['../../productPage', this.productData.id], { relativeTo: this.route })
      .then(() => {
        window.location.reload();
      });
  }
}
