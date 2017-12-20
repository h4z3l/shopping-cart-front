import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductSummaryComponent } from './components/product-summary/product-summary.component';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { SplitPipe } from './pipes/split.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CartItemComponent } from './components/cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductSummaryComponent,
    CartComponent,
    CategoryComponent,
    SplitPipe,
    TruncatePipe,
    CapitalizePipe,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    CartService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
