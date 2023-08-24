import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductBlockComponent} from "./components/product-block/product-block.component";
import {ProductResolverService} from "./resolvers/ProductResolverService";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";

//http://localhost:4200/pc/6
const routes: Routes = [
  {
    path: 'pc/:id',
    component: ProductBlockComponent,
    resolve: {
      resolvedData: ProductResolverService // Associate the resolver with the route
    }
  },
  { path: 'first-component', component: SearchBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
