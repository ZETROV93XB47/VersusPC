import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {SearchPageComponent} from "./components/search-page/search-page.component";
import {ProductBlockComponent} from "./components/product-block/product-block.component";
import {ProductDetailsResolverService} from "./resolvers/ProductDetailsResolverService";
import {SearchPageResolverService} from "./resolvers/SearchPageResolverService";
import {HomePageResolverService} from "./resolvers/HomePageResolverService";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent, resolve: { resolvedData: HomePageResolverService }},
  { path:'contact', component: ContactPageComponent},
  { path: 'search/:productName', component: SearchPageComponent, resolve: { resolvedData: SearchPageResolverService }},
  { path: 'productPage/:id', component: ProductDetailsComponent, resolve: {resolvedData: ProductDetailsResolverService, relatedProductsData: HomePageResolverService}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
