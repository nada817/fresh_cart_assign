import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
// import { WishlistComponent } from './wishlist/wishlist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { BrandsComponent } from './brands/brands.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ToastrModule } from 'ngx-toastr';
import { SearchPipe } from './search.pipe';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PaymentComponent } from './payment/payment.component';
import { AllordersComponent } from './allorders/allorders.component';
import { WishlistsComponent } from './wishlists/wishlists.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    // WishlistComponent,
    NotfoundComponent,
    NavbarComponent,
    CategoryComponent,
    BrandsComponent,
    MycartComponent,
    ProductsComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    ProductsDetailsComponent,
    MainSliderComponent,
    SearchPipe,
    FooterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PaymentComponent,
    AllordersComponent,
    WishlistsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
    FormsModule,
  ReactiveFormsModule,
  ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
