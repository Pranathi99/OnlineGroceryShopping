import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedNavbarComponent } from './fixed-navbar/fixed-navbar.component';
import { SpicesComponent } from './spices/spices.component';
import { CardsComponent } from './cards/cards.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { DairyproductsComponent } from './dairyproducts/dairyproducts.component';
import { DalsComponent } from './dals/dals.component';
import { FloursComponent } from './flours/flours.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CategoriesComponent } from './categories/categories.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EditaddressComponent } from './editaddress/editaddress.component';

@NgModule({
  declarations: [
    AppComponent,
    FixedNavbarComponent,
    SpicesComponent,
    CardsComponent,
    VegetablesComponent,
    DairyproductsComponent,
    DalsComponent,
    FloursComponent,
    FruitsComponent,
    CartComponent,
    CartItemsComponent,
    CategoriesComponent,
    CarouselComponent,
    EditprofileComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    ProfileComponent,
    SignupComponent,
    EditaddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
