import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

// service
import { UserService } from './service/user.service';
import { ProductService } from './service/product.service';

// component
import { AppComponent } from './app.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { NavigationFooterComponent } from './navigation-footer/navigation-footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { UserFavoriteComponent } from './user-favorite/user-fav.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { UserRecordComponent } from './user-record/user-record.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserForgotPasswordComponent } from './user-forgot-password/user-forgot-password.component';
import { UserMailboxComponent } from './user-mailbox/user-mailbox.component';
import { UserMailboxDetailComponent } from './user-mailbox-detail/user-mailbox-detail.component';
import { UserShippingCartComponent } from './user-shipping-cart/user-shipping-cart.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { UserMailboxInboxComponent } from './user-mailbox-inbox/user-mailbox-inbox.component';
import { UserMailboxOutboxComponent } from './user-mailbox-outbox/user-mailbox-outbox.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserVerifyComponent } from './user-verify/user-verify.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserBalanceComponent } from './user-balance/user-balance.component';
import { UserMailboxNewComponent } from './user-mailbox-new/user-mailbox-new.component';
import { ProductSearchResultComponent } from './product-search-result/product-search-result.component';
import { UserPasswordRenewComponent } from './user-password-renew/user-password-renew.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    NavigationFooterComponent,
    HomePageComponent,
    ItemsListComponent,
    ItemCategoryComponent,
    UserRegisterComponent,
    UserPageComponent,
    UserCommentComponent,
    UserFavoriteComponent,
    ItemdetailComponent,
    MessageDetailComponent,
    UserRecordComponent,
    ProductDetailComponent,
    UserForgotPasswordComponent,
    UserMailboxComponent,
    UserMailboxDetailComponent,
    UserShippingCartComponent,
    ProductCreateComponent,
    UserMailboxInboxComponent,
    UserMailboxOutboxComponent,
    ProductSearchComponent,
    UserLoginComponent,
    UserProfileComponent,
    UserRegisterComponent,
    UserVerifyComponent,
    UserUpdateComponent,
    UserBalanceComponent,
    UserMailboxNewComponent,
    ProductSearchResultComponent,
    UserPasswordRenewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng4LoadingSpinnerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
