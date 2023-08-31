import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductBlockComponent } from './components/product-block/product-block.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailsBlockComponent } from './product-details-block/product-details-block.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductBlockComponent,
    SearchBarComponent,
    HeaderComponent,
    SearchPageComponent,
    HomePageComponent,
    ProductDetailsComponent,
    FooterComponent,
    ProductDetailsBlockComponent,
    ContactPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      NgOptimizedImage,
      FormsModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
