import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePeriodoComponent } from './create-periodo/create-periodo.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Periodos',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'Periodos',
            },
            {
                path: 'RegistrarPeriodo',
                component: CreatePeriodoComponent,
                data: {
                    title: 'Registrar Periodos',
                },
            }

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PeriodosRoutingModule { }
