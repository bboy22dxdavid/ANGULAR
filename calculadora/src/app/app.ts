import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExSucessor } from './component/ex-sucessor/ex-sucessor';

//IMPORTS DAS CLASSES


//NO IMPORTS ADD O NOME DA CLASS EX:  Calculadora, OperadorTernario
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExSucessor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculadora');
}
