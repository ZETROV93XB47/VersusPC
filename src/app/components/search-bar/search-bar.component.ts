import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchForm = new FormControl('');

  onSubmit() {
    console.log("submited");
    console.log((this.searchForm.value));
  }
}
