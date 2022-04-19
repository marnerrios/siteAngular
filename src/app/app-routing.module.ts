import { PrincipalComponent } from './principal/principal.component';
import { AgendaComponent } from './agenda/agenda.component';
import { Routes } from '@angular/router';
export const ROUTES: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'agenda/:status/:appointment', component: AgendaComponent}
]