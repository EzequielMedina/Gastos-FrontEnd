import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateGastosComponent } from './create-gastos/create-gastos.component';
import { GastosRoutingModule } from './gastos-routing.module';
import { TiposDeGastosProvider } from 'src/app/providers/TiposDeGastosProvider';
import { CategoriaProvider } from 'src/app/providers/CategoriaProvider';
import { GastosProvider } from 'src/app/providers/GastosProvider';
import { PeriodosProvider } from 'src/app/providers/PeriodosProvider';
import { TarjetaProvider } from 'src/app/providers/TarjetaProvider';
@NgModule({
    declarations: [
        CreateGastosComponent,
    ],
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        GridModule,
        IconModule,
        FormModule,
        ReactiveFormsModule,
        HttpClientModule,
        GastosRoutingModule
    ],
    providers: [

        CategoriaProvider,
        TiposDeGastosProvider,
        GastosProvider,
        PeriodosProvider,
        TarjetaProvider
    ]
})
export class GastosModule {
}
