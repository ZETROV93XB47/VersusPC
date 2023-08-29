import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  @Input() resolvedData!: Product;

  constructor(private route: ActivatedRoute) {
    this.resolvedData = this.route.snapshot.data['resolvedData'];
    console.log(this.route.snapshot.data);
    console.log(this.resolvedData);
  }

}
