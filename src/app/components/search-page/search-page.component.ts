import { Component } from '@angular/core';
import {Product} from "../../models/Product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  resolvedData!: Product[];

  constructor(private route: ActivatedRoute) {
    this.resolvedData = this.route.snapshot.data['resolvedData'];
    console.log(this.route.snapshot.data);
    console.log(this.resolvedData);
  }
}
