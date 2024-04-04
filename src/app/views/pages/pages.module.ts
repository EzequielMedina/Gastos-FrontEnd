import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProvider } from 'src/app/providers/UserProvider';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaProvider } from 'src/app/providers/CategoriaProvider';
import { TiposDeGastosProvider } from 'src/app/providers/TiposDeGastosProvider';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserProvider
  ]
})
export class PagesModule {
}
