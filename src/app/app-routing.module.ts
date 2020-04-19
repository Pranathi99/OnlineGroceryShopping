import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VegetablesComponent} from '../app/vegetables/vegetables.component';
import {FruitsComponent} from '../app/fruits/fruits.component';
import {DairyproductsComponent} from '../app/dairyproducts/dairyproducts.component';
import {DalsComponent} from '../app/dals/dals.component';
import {FloursComponent} from '../app/flours/flours.component';
import {SpicesComponent} from '../app/spices/spices.component';
import {CartComponent} from '../app/cart/cart.component';
import {CardsComponent} from './cards/cards.component';

const routes: Routes = [
    {path:'vegetables',component:VegetablesComponent},
    {path:'fruits',component:FruitsComponent},
    {path:'dairyproducts',component:DairyproductsComponent},
    {path:'dals',component:DalsComponent},
    {path:'flours',component:FloursComponent},
    {path:'spices',component:SpicesComponent},
    {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
