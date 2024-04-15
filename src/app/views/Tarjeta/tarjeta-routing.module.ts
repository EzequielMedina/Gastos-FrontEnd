import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTarjetaComponent } from './create-tarjeta/create-tarjeta.component';
const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Tarjetas',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'Tarjetas',
            },
            {
                path: 'RegistrarTarjeta',
                component: CreateTarjetaComponent,
                data: {
                    title: 'Registrar Tarjetas',
                },
            }

        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TarjetaRoutingModule { }
