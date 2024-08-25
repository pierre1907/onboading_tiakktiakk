import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: ()=> import('./modules/users/users.module').then(m => m.UsersModule)
    }
];
