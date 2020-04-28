import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VegetablesComponent} from '../app/vegetables/vegetables.component';
import {FruitsComponent} from '../app/fruits/fruits.component';
import {DairyproductsComponent} from '../app/dairyproducts/dairyproducts.component';
import {DalsComponent} from '../app/dals/dals.component';
import {FloursComponent} from '../app/flours/flours.component';
import {SpicesComponent} from '../app/spices/spices.component';
import {CartComponent} from '../app/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditaddressComponent } from './editaddress/editaddress.component';
import {PaymentComponent} from './payment/payment.component'
import { BreadsComponent } from './breads/breads.component';
import {FeedbackComponent} from './feedback/feedback.component';

const routes: Routes = [
    {path:'vegetables',component:VegetablesComponent},
    {path:'fruits',component:FruitsComponent},
    {path:'dairyproducts',component:DairyproductsComponent},
    {path:'dals',component:DalsComponent},
    {path:'flours',component:FloursComponent},
    {path:'spices',component:SpicesComponent},
    {path:'cart',component:CartComponent},
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'editprofile', component:EditprofileComponent},
    {path: 'editaddress', component: EditaddressComponent},
    {path:'payment',component:PaymentComponent},
    {path:'breads',component:BreadsComponent},
    {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
