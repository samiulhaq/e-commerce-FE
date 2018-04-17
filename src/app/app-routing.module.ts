import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './shared/_layouts/header/header.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


const routes: Routes = [
  
 { 
    path: '', 
    component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'thank-you', component: ThankYouComponent }
    ]
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
