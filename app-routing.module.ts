import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { MycartComponent } from './mycart/mycart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { authGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PaymentComponent } from './payment/payment.component';
import { AllordersComponent } from './allorders/allorders.component';
import { WishlistsComponent } from './wishlists/wishlists.component';

const routes: Routes = [
  {path:'' ,canActivate:[authGuard],component:HomeComponent ,title:'Home'},
  {path:'signin' ,component:SigninComponent ,title:'Sign in'},
  {path:'forgotPassword' ,component:ForgotPasswordComponent ,title:'Forgot Password'},
  {path:'resetPassword' ,component:ResetPasswordComponent ,title:'Reset Password'},
  {path:'signup' ,component:SignupComponent ,title:'Sign up'},
  {path:'home' ,canActivate:[authGuard] ,component:HomeComponent ,title:'Home'},
  {path:'brands' ,canActivate:[authGuard]  ,component:BrandsComponent ,title:'Brands'},
  {path:'product' ,canActivate:[authGuard]  ,component:ProductsComponent ,title:'Products'},
  {path:'productdetails/:productId' ,canActivate:[authGuard] , component:ProductsDetailsComponent ,title:"Product Details"},
  {path:'category' ,canActivate:[authGuard] ,component:CategoryComponent ,title:'categories'},
  {path:'category/:Id',canActivate:[authGuard] , component:CategoryComponent},
  {path:'mycart' ,canActivate:[authGuard] ,component:MycartComponent ,title:'My cart'},
  {path:'wishlist' ,canActivate:[authGuard] ,component:WishlistsComponent ,title:'wishList'},

  {path:'checkout' ,canActivate:[authGuard] ,component:PaymentComponent ,title:'Payment'},
  {path:'allorders' ,canActivate:[authGuard] ,component:AllordersComponent ,title:'All Orders'},
  
  {path:'**' ,component:NotfoundComponent ,title:'Not found'}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
