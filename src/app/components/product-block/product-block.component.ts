import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product";

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss']
})
export class ProductBlockComponent {
  @Input() productData!: Product;
}
