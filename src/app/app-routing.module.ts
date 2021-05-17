import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WomenPageComponent} from './women-page/women-page.component';
import {KidsPageComponent} from './kids-page/kids-page.component';
import {MenPageComponent} from './men-page/men-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {KidsGuardGuard} from './kids-page/kids-guard.guard';
import {UnsavedGuard} from './unsaved.guard';
import {CartComponent} from './cart/cart.component';
import {MainLayoutComponent} from '../main-layout/main-layout.component';



const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'women', component: WomenPageComponent},
      {path: 'men', component: MenPageComponent},
      {path: 'kids', component: KidsPageComponent},
      {path: 'cart', component: CartComponent},
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin-page/admin.module').then(m => m.AdminModule)
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
