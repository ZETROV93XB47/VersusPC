import { Component } from '@angular/core';
import {Product} from "../../models/Product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  resolvedData!: Product[];

  constructor(private route: ActivatedRoute) {
    this.resolvedData = this.route.snapshot.data['resolvedData'];
    console.log(this.route.snapshot.data);
    console.log(this.resolvedData);
  }
}
