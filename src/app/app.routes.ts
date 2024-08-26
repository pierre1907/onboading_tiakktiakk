import { Routes } from '@angular/router';
import {SideBarComponent} from "./cores/components/side-bar/side-bar.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: ()=> import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'admin',
    component: SideBarComponent,
    loadChildren: ()=> import('./modules/administration/administration.module').then(m => m.AdministrationModule)

  }
];
