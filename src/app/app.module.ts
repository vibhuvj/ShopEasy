import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { RegularPageComponent } from './regular-page/regular-page.component';
import { ShopComponent } from './shop/shop.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SingleProductDetailsComponent } from './single-product-details/single-product-details.component';
import { ClothingComponent } from './clothing/clothing.component';
import {MyService} from './my.service';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    CheckoutComponent,
    ContactComponent,
    RegularPageComponent,
    ShopComponent,
    SingleBlogComponent,
    SingleProductDetailsComponent,
    ClothingComponent,
    PagesComponent,
    LoginComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
