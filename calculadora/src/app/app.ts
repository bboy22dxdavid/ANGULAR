import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//IMPORTS DAS CLASSES
import { OperadorTernario } from './component/operador-ternario/operador-ternario';


//NO IMPORTS ADD O NOME DA CLASS EX:  Calculadora, OperadorTernario
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  OperadorTernario],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculadora');
}
