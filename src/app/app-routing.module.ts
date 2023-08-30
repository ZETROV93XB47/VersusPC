import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {SearchPageComponent} from "./components/search-page/search-page.component";
import {ProductBlockComponent} from "./components/product-block/product-block.component";
import {ProductDetailsResolverService} from "./resolvers/ProductDetailsResolverService";
import {SearchPageResolverService} from "./resolvers/SearchPageResolverService";
import {HomePageResolverService} from "./resolvers/HomePageResolverService";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent, resolve: { resolvedData: HomePageResolverService }},
  { path: 'search/:productName',
    component: SearchPageComponent,
    resolve: { resolvedData: SearchPageResolverService },
    /*children: [
      { path: 'productPage/:id',
        component: ProductDetailsComponent,
        resolve: { resolvedData: ProductDetailsResolverService }}
    ]*/},
  { path: 'productPage/:id',
    component: ProductDetailsComponent,
    resolve: {
    resolvedData: ProductDetailsResolverService,
      relatedProductsData: HomePageResolverService
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
