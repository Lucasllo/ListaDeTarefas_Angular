import { Component, OnInit } from '@angular/core';
import { tarefa } from './tarefa.interface';

@Component({
  selector: 'app-diretiva-for',
  templateUrl: './diretiva-for.component.html',
  styleUrls: ['./diretiva-for.component.css']
})
export class DiretivaFORComponent {

  tarefas: tarefa[] = [
    {
      tarefa:"Arrumar a cama",
      feito: true
    },
    {
      tarefa:"Lavar Louça",
      feito: true
    },
    {
      tarefa: "Limpar a Casa",
      feito: false
    }
  ]

  adicionarTarefa(descricao:string){
    this.tarefas.push({
      tarefa: descricao,
      feito: false
    })
  }

  excluirTarefa(id:number){
    this.tarefas.splice(id, 1);
  }

}
