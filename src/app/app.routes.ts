import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ActiveComponent } from './pages/active/active.component';
import { ActiveListComponent } from './pages/active-list/active-list.component';
import { UserBrowseComponent } from './pages/user-browse/user-browse.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path:'', component: LoginComponent},
    {path:'active', component:ActiveComponent},
    {path:'active-list', component:ActiveListComponent},
    {path:'user-browse', component: UserBrowseComponent},
    {path:'users', component: UsersComponent}
];
