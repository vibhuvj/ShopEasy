import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { RegularPageComponent } from './regular-page/regular-page.component';
import { ShopComponent } from './shop/shop.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SingleProductDetailsComponent } from './single-product-details/single-product-details.component';
import { ClothingComponent } from './clothing/clothing.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"blog" , component:BlogComponent},
  {path:"checkout" , component:CheckoutComponent},
  {path:"contact" , component:ContactComponent},
  {path:"regular-page" , component:RegularPageComponent},
  {path:"shop/:id" , component:ShopComponent},
  {path:"shop/:id/:name" , component:ShopComponent},
  {path:"single-blog" , component:SingleBlogComponent},
  {path:"single-product-details" , component:SingleProductDetailsComponent},
  {path:"clothing" , component:ClothingComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
