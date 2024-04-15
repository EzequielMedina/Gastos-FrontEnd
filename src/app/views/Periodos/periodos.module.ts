import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatePeriodoComponent } from './create-periodo/create-periodo.component';
import { PeriodosRoutingModule } from './periodos-routing.module';
import { PeriodosProvider } from 'src/app/providers/PeriodosProvider';
@NgModule({
    declarations: [
        CreatePeriodoComponent,
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
        PeriodosRoutingModule
    ],
    providers: [
        PeriodosProvider
    ]
})
export class PeriodosModule {
}
