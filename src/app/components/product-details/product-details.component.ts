import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product";
import {ActivatedRoute} from "@angular/router";
import Toastify from 'toastify-js';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  @Input() resolvedData!: Product;
  @Input() relatedProductsData! : Product[];
  numberOfProductsInCart = 1;

  constructor(private route: ActivatedRoute) {
    this.resolvedData = this.route.snapshot.data['resolvedData'];
    this.relatedProductsData = this.route.snapshot.data['relatedProductsData'];
    console.log(this.route.snapshot.data);
    console.log(this.resolvedData);
  }


  addToCart() {
    this.numberOfProductsInCart+=1;
    this.showNotification("Product " + this.resolvedData.name + " added to your cart :)")
        .showToast();

    switch (this.numberOfProductsInCart){
        case 5:
            this.showNotification("Faites chauffer la carte Monsieur !!!😤").showToast();
            break;

        case 10:
            this.showNotification("Le banquier, il va pas être content, enfin, ça dépend du banquier de qui !!!😂😂😂").showToast();
            break;
        default:
            this.showNotification("Très bon choix 😏🔥🔥🔥").showToast();
    }

    if(this.numberOfProductsInCart > this.resolvedData.stock) {
        this.showNotification("Nous vous vendrions tous notre stock si possible mais le nombre d'éléments à acheter ne peux pas dépasser le nombre d'élémentts en stock 😔").showToast();
        this.numberOfProductsInCart-=1;
    }

  }

  showNotification(message: string) {
      return Toastify({
          text: message,
          className: "info",
          style: {
              background: "linear-gradient(to right, #82c0e7, #aeb2a5)",
          }
      })
  }
}
