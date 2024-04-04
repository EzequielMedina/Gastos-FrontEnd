import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateGastosComponent } from './create-gastos.component';
import { GastosRoutingModule } from './gastos-routing.module';
import { TiposDeGastosProvider } from 'src/app/providers/TiposDeGastosProvider';
import { CategoriaProvider } from 'src/app/providers/CategoriaProvider';
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
        TiposDeGastosProvider
    ]
})
export class GastosModule {
}
