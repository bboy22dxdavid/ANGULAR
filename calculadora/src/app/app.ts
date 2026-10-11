import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExVariavelPrimitiva } from './component/ex-variavel-primitiva/ex-variavel-primitiva';

//IMPORTS DAS CLASSES


//NO IMPORTS ADD O NOME DA CLASS EX:  Calculadora, OperadorTernario
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExVariavelPrimitiva],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculadora');
}
