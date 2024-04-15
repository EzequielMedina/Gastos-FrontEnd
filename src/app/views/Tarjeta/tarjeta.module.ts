import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateTarjetaComponent } from './create-tarjeta/create-tarjeta.component';
import { TarjetaRoutingModule } from './tarjeta-routing.module';
import { TarjetaProvider } from 'src/app/providers/TarjetaProvider';

@NgModule({
    declarations: [
        CreateTarjetaComponent,
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
        TarjetaRoutingModule
    ],
    providers: [
        TarjetaProvider
    ]
})
export class TarjetaModule {
}
