import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-if',
  templateUrl: './diretiva-if.component.html',
  styleUrls: ['./diretiva-if.component.css']
})
export class DiretivaIFComponent {

  exibir:boolean = true;

  exibindo(){
    this.exibir = !this.exibir;
  }

}
