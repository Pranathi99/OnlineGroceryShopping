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
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
