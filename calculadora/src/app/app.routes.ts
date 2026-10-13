import { Routes } from '@angular/router';
import { Calculadora } from './component/calculadora/calculadora';
import { CalculadoraCigarro } from './component/calculadora-cigarro/calculadora-cigarro';
import { HomeComponent } from './component/home-component/home-component';

export const routes: Routes = [
{ path: '', component: HomeComponent }, // Página inicial
{ path: 'calculadora', component: Calculadora },
  { path: 'calculadoraCigaro', component: CalculadoraCigarro },
  { path: '**', redirectTo: '' } // Redireciona rotas inexistentes para a home

];
