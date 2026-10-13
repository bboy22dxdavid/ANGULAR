import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraCigarro } from './component/calculadora-cigarro/calculadora-cigarro';


//IMPORTS DAS CLASSES


//NO IMPORTS ADD O NOME DA CLASS EX:  Calculadora, OperadorTernario
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculadoraCigarro],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculadora');
}
