import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLayoutComponent } from './shared/_layouts/user-layout/user-layout.component';
import { SiteLayoutComponent } from './shared/_layouts/site-layout/site-layout.component';
import { StaticLayoutComponent } from './shared/_layouts/static-layout/static-layout.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserShippingAddressComponent } from './user-shipping-address/user-shipping-address.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserOrderDetailComponent } from './user-order-detail/user-order-detail.component';

import { SizeChartComponent } from './static-pages/size-chart/size-chart.component';
import { ShippingAndDeliveryComponent } from './static-pages/shipping-and-delivery/shipping-and-delivery.component';
import { RefundPolicyComponent } from './static-pages/refund-policy/refund-policy.component';
import { PrivacyPolicyComponent } from './static-pages/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './static-pages/terms-of-use/terms-of-use.component';


const routes: Routes = [

 {
    path: '',
    component: SiteLayoutComponent,
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

   {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', component: UserProfileComponent, pathMatch: 'full'},
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'user-orders', component: UserOrdersComponent },
      { path: 'user-order-detail', component: UserOrderDetailComponent },
      { path: 'user-shipping-address', component: UserShippingAddressComponent }
    ]
  },

  {
    path: '',
    component: StaticLayoutComponent,
    children: [
      { path: 'size-chart', component: SizeChartComponent },
      { path: 'shipping-and-delivery', component: ShippingAndDeliveryComponent },
      { path: 'refund-policy', component: RefundPolicyComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'terms-of-use', component: TermsOfUseComponent }
    ]
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
