import {Component} from '@angular/core';
import {CartProduct} from "../../types/CartProduct";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
    //cartProduct: CartProduct[] = this.getProducts();
    cartProduct!: CartProduct[];
    PRODUCT_IN_CART  = "productsInCart";

    constructor() {
        this.cartProduct = this.getProducts();
    }

    getCartSize() : number{
        let products: CartProduct[] = this.getProducts();
        // Utilisez la méthode reduce pour faire la somme des numberOfProducts
        const totalNumberOfProducts =
            products.reduce((total, cartItem) => {
            return total + cartItem.numberOfProducts;
        }, 0);

        console.log("Total Number of Products:", totalNumberOfProducts);
        return 0;
    }

    getProducts() : CartProduct[]{
        const stringfiedCartProduct = localStorage.getItem(this.PRODUCT_IN_CART);

        if(stringfiedCartProduct!= null) {
            let productList = JSON.parse(stringfiedCartProduct);
            console.log(productList);
            return productList;
        }
        return [];
    }

    getProductPhoto(index: number) {
        let products: CartProduct[] = this.getProducts();
        return products.at(index)?.productData.photo;
    }

    getProductDescription(index: number) {
        let products: CartProduct[] = this.getProducts();
        return products.at(index)?.productData.description;
    }

    getProductPrice(index: number) {
        let products: CartProduct[] = this.getProducts();
        return products.at(index)?.productData.price;
    }

    getProductTotal() {
        // @ts-ignore
        return this.getProductPrice() * this.getNumberOfProducts()
    }

    getNumberOfProducts(index:number) {
        let products: CartProduct[] = this.getProducts();
        return products.at(index)?.numberOfProducts;
    }

}
