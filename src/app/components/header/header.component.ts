import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Product} from "../../models/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {CartProduct} from "../../types/CartProduct";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
      './header.component.scss'
  ]
})
export class HeaderComponent {
    constructor(private router: Router, private route: ActivatedRoute) {}
    searchForm:FormControl<number | null> = new FormControl();
    product!: Product;
    PRODUCT_IN_CART  = "productsInCart";

    onSubmit() {
        this.router.navigate(['search', this.searchForm.value], { relativeTo: this.route })
            .then(() => {
                window.location.reload();
            });
    }

    goToPage(value: number | null) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/productPage', value]);
    }

    getCartSize() : number{
        let products: CartProduct[] = this.getProducts();
        // Utilisez la méthode reduce pour faire la somme des numberOfProducts
        const totalNumberOfProducts =
            products.reduce((total, cartItem) => {
                return total + cartItem.numberOfProducts;
            }, 0);

        console.log("Total Number of Products:", totalNumberOfProducts);
        return totalNumberOfProducts;
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

}
