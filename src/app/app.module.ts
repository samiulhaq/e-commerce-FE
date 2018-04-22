import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { NgxGalleryModule } from 'ngx-gallery';
import 'hammerjs';

import { UserLayoutComponent } from './shared/_layouts/user-layout/user-layout.component';
import { SiteLayoutComponent } from './shared/_layouts/site-layout/site-layout.component';

import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { NavComponent } from './shared/nav/nav.component';
import { NavMobileComponent } from './shared/nav-mobile/nav-mobile.component';
import { HomeComponent } from './home/home.component';
import { SidenavService } from './services/sidenav.service';
import { FiltersComponent } from './shared/filters/filters.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SiteHeaderComponent } from './shared/_layouts/site-header/site-header.component';
import { SiteFooterComponent } from './shared/_layouts/site-footer/site-footer.component';
import { UserFooterComponent } from './shared/_layouts/user-footer/user-footer.component';
import { UserHeaderComponent } from './shared/_layouts/user-header/user-header.component';
import { UserNavComponent } from './shared/user-nav/user-nav.component';
import { UserShippingAddressComponent } from './user-shipping-address/user-shipping-address.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserOrderDetailComponent } from './user-order-detail/user-order-detail.component';
import { SizeChartComponent } from './static-pages/size-chart/size-chart.component';
import { ShippingAndDeliveryComponent } from './static-pages/shipping-and-delivery/shipping-and-delivery.component';
import { RefundPolicyComponent } from './static-pages/refund-policy/refund-policy.component';
import { PrivacyPolicyComponent } from './static-pages/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './static-pages/terms-of-use/terms-of-use.component';
import { StaticLayoutComponent } from './shared/_layouts/static-layout/static-layout.component';
import { StaticHeaderComponent } from './shared/_layouts/static-header/static-header.component';
import { StaticFooterComponent } from './shared/_layouts/static-footer/static-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NavComponent,
    NavMobileComponent,
    HomeComponent,
    FiltersComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    ThankYouComponent,
    UserHeaderComponent,
    UserProfileComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    UserFooterComponent,
    UserLayoutComponent,
    SiteLayoutComponent,
    UserNavComponent,
    UserShippingAddressComponent,
    UserOrdersComponent,
    UserOrderDetailComponent,
    SizeChartComponent,
    ShippingAndDeliveryComponent,
    RefundPolicyComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    StaticLayoutComponent,
    StaticHeaderComponent,
    StaticFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgxGalleryModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
