import {Component, EventEmitter, Output} from '@angular/core';
import {ProductServiceService} from "../../services/product-service.service";
import {FormControl} from "@angular/forms";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
      './header.component.scss'
  ]
})
export class HeaderComponent {
    constructor(private productService: ProductServiceService) {}
    searchForm:FormControl<number | null> = new FormControl();
    product!: Product;

    @Output() productResponseEvent = new EventEmitter<Product>();

    onSubmit() {
        this.initData();
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

    initData() {
        this.getData(this.searchForm.value);
        this.productResponseEvent.emit(this.product);
    }
}
