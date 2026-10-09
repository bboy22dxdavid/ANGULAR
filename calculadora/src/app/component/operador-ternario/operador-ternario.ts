import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operador-ternario',
  imports: [FormsModule, CommonModule],
  templateUrl: './operador-ternario.html',
  styleUrl: './operador-ternario.scss',
})
export class OperadorTernario {
   //operador ternario e uma forma compacta par declarar uma estrutura condicional
   //Exercico verificar se o salario e > que 5000, doar

    salario: number = 0;
    mensagemDoar: string = " Eu vou doar! ";
    mensagemNaoDoar: string = " Eu Não vou doar! "

    porcent: number = 0;

    result: string = "";

    //condicao para operador ternario verdadeiro ou falso
    resultado(){

      if(this.salario > 500){
       this.result =  this.mensagemDoar;
       this.porcent = (this.salario * 10) / 100;
        console.log("mensagem " + this.mensagemDoar +  this.porcent);
        this.limparCampos();
      } else{
       this.result =  this.mensagemNaoDoar;
        console.log("mensagem " + this.mensagemNaoDoar);
        this.limparCampos();
      }
    }

     // MÉTODO PARA LIMPAR AUTOMATICAMENTE OS INPUTS
  private limparCampos() {
    console.log("Limpando os campos de digitação...");

    // Reseta apenas os inputs. O 'this.resultado' continua intacto!
    this.salario = 0;


  }


}
