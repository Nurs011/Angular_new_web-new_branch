import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DatabaseComponent } from './database/database.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from '../auth.guard';
import {AdminPageComponent} from './admin-page.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: AdminPageComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'database', component: DatabaseComponent, canActivate: [AuthGuard]},
        ]}
    ])
  ],
  exports: [RouterModule],
  declarations: [AdminPageComponent, LoginPageComponent, DatabaseComponent]
})

export class AdminModule{
}
