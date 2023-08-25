import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {SearchPageComponent} from "./components/search-page/search-page.component";
import {ProductBlockComponent} from "./components/product-block/product-block.component";
import {ProductResolverService} from "./resolvers/ProductResolverService";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'productPage/:id', component: ProductBlockComponent, resolve: { resolvedData: ProductResolverService }},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
