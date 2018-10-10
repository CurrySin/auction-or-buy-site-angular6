import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { NavigationFooterComponent } from './navigation-footer/navigation-footer.component';
import { SearchComponent } from './search/search.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemCategoryComponent } from './item-category/item-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    NavigationFooterComponent,
    SearchComponent,
    HomePageComponent,
    ItemsListComponent,
    ItemCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
