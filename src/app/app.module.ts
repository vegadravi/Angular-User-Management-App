import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ConfirmDialogModule,} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    AppRoutingModule,
    ToastModule
  ],
  providers: [ConfirmationService,MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
