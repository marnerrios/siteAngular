import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ConnectionService} from './app.service';
import { HttpClientModule } from  '@angular/common/http';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ROUTES } from './app-routing.module';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AgendaComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ConnectionService, ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
