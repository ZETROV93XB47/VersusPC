import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Product} from "../../models/Product";
import {ProductServiceService} from "../../services/product-service.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  constructor(private productService: ProductServiceService) {}
  searchForm = new FormControl(1);
  product!: Product;

  @Output() productResponseEvent = new EventEmitter<Product>();

  onSubmit() {
    this.getData(this.searchForm.value);
    this.productResponseEvent.emit(this.product);
  }

  getData(pcId: number | null) {
    console.log(pcId)
    const productURL = "http://localhost:8080/products/pc/";
    this.productService.getProduit(productURL+pcId).subscribe(
      (data) => {
        this.product = data;
        console.log(data);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }

}
