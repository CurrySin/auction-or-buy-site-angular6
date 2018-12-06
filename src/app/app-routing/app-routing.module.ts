import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { HomePageComponent } from './../home-page/home-page.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { UserVerifyComponent } from '../user-verify/user-verify.component';
import { UserForgotPasswordComponent } from '../user-forgot-password/user-forgot-password.component';
import { UserUpdateComponent } from '../user-update/user-update.component';
import { UserBalanceComponent } from '../user-balance/user-balance.component';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { UserShippingCartComponent } from '../user-shipping-cart/user-shipping-cart.component';
import { UserFavoriteComponent } from '../user-favorite/user-fav.component';
import { UserMailboxComponent } from '../user-mailbox/user-mailbox.component';
import { UserMailboxInboxComponent } from '../user-mailbox-inbox/user-mailbox-inbox.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'user',
    children: [{
      path: 'profile',
      component: UserProfileComponent
    }, {
      path: 'register',
      component: UserRegisterComponent
    }, {
      path: 'verify',
      component: UserVerifyComponent
    }, {
      path: 'forgot_password',
      component: UserForgotPasswordComponent
    }, {
      path: 'update',
      component: UserUpdateComponent
    }, {
      path: 'balance',
      component: UserBalanceComponent
    }, {
      path: 'shipping_cart',
      component: UserShippingCartComponent
    }, {
      path: 'favorite',
      component: UserFavoriteComponent
    }, {
      path: 'mailbox',
      component: UserMailboxInboxComponent
    }]
  }, {
    path: 'product',
    children: [{
      path: 'create',
      component: ProductCreateComponent
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {

}
