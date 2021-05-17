import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KidsPageComponent } from './kids-page/kids-page.component';
import { MenPageComponent } from './men-page/men-page.component';
import { WomenPageComponent } from './women-page/women-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {MycustompipePipe} from './Pipes/my.pipe';
import {ProductService} from './services/product.service';
import {LoggingService} from './services/logging.service';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {CartComponent} from './cart/cart.component';
import {DatabaseComponent} from './admin-page/database/database.component';
import {LoginPageComponent} from './admin-page/login-page/login-page.component';
import {MainLayoutComponent} from '../main-layout/main-layout.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    KidsPageComponent,
    MenPageComponent,
    WomenPageComponent,
    FooterComponent,
    MycustompipePipe,
    CartComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

