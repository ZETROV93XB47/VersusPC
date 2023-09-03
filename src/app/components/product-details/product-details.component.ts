import {Component, Input} from '@angular/core';
import {Product} from "../../models/Product";
import {ActivatedRoute} from "@angular/router";
import Toastify from 'toastify-js';
import {CartProduct} from "../../types/CartProduct";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  @Input() resolvedData!: Product;
  @Input() relatedProductsData! : Product[];
  numberOfProductsInCart = 0;
  PRODUCT_IN_CART  = "productsInCart";
  //cartProducts:  Array<CartProduct> = [];

  constructor(private route: ActivatedRoute) {
    this.resolvedData = this.route.snapshot.data['resolvedData'];
    this.relatedProductsData = this.route.snapshot.data['relatedProductsData'];
    console.log(this.route.snapshot.data);
    console.log(this.resolvedData);
  }

  /*
    getProducts() : Product[]{
        const stringfiedCartProduct = localStorage.getItem(this.PRODUCT_IN_CART);

        if(stringfiedCartProduct!= null) {
            let productList = JSON.parse(stringfiedCartProduct);
            console.log(productList);
            return productList;
        }
        return [];
    }
*/

    getProducts() : CartProduct[]{
        const stringfiedCartProduct = localStorage.getItem(this.PRODUCT_IN_CART);

        if(stringfiedCartProduct!= null) {
            let productList = JSON.parse(stringfiedCartProduct);
            console.log(productList);
            return productList;
        }
        return [];
    }

    addItemToCart(){
        let productList:CartProduct[] = this.getProducts();

        if(productList.length > 0) { //vérifier si un produit a déjà été sauvegardé
            const index = productList.findIndex(cartProduct => cartProduct.productData.id === this.resolvedData.id);
            if (index > -1) {//vérifier si le produit existe déjà
                productList[index].numberOfProducts+=1;
            }
            else {//s'il n'existe pas déjà, le rajouter à la liste existante
                productList.push({numberOfProducts:1, productData:this.resolvedData});
            }
            localStorage.setItem(this.PRODUCT_IN_CART, JSON.stringify(productList));
        }
        else{
            productList.push({numberOfProducts:1, productData:this.resolvedData});
            localStorage.setItem(this.PRODUCT_IN_CART, JSON.stringify(productList));
        }
    }

  addToCart() {

      this.addItemToCart()

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

  checkIfItemAlreadyExist(productId: number){

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
