import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactsListComponent } from './pages/contacts-list/contacts-list.component';
import { ContactActionComponent } from './pages/contact-action/contact-action.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ReturnBarComponent } from './components/return-bar/return-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactsListComponent,
    ContactActionComponent,
    ErrorMessageComponent,
    ReturnBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
