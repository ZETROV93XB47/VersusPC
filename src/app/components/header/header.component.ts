import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Product} from "../../models/Product";
import {ActivatedRoute, Router} from "@angular/router";

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
    //@Output() productResponseEvent = new EventEmitter<Product>();

/*
    onSubmit() {
        this.router.navigate(['productPage', this.searchForm.value], { relativeTo: this.route })
            .then(() => {
                window.location.reload();
            });
    }
*/

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
}
