import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { ContactActionComponent } from './pages/contact-action/contact-action.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'contacts/list', component: ContactsListComponent, canActivate: [AuthenticationGuard] },
  { path: 'contact/:action', component: ContactActionComponent,  canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
