import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss',
})
export class Calculadora {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  //METODO PARA REALIZAR CALCULOS
  calcularResultados (){
    //debugando metodo
    console.log("Chamando o método para calcular o resultado!");

    //instanciando as variaveis para realizar a operação
    this.resultado = this.numero1 + this.numero2;

     // 2. Chama o método para limpar os campos automaticamente
    this.limparCampos();
  }

   // MÉTODO PARA LIMPAR AUTOMATICAMENTE OS INPUTS
  private limparCampos() {
    console.log("Limpando os campos de digitação...");

    // Reseta apenas os inputs. O 'this.resultado' continua intacto!
    this.numero1 = 0;
    this.numero2 = 0;
  }

}
