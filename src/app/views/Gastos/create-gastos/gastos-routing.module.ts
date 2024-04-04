import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGastosComponent } from './create-gastos.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Theme',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'Gastos',
            },
            {
                path: 'RegistrarGastos',
                component: CreateGastosComponent,
                data: {
                    title: 'Registrar Gastos',
                },
            }

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GastosRoutingModule { }
