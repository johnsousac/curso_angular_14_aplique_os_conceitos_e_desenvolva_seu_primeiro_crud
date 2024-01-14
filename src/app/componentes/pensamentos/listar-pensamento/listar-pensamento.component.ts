import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis, quae quam optio sint assumenda velit deserunt fuga. Eos, neque. Optio ipsum reprehenderit impedit laboriosam qui ratione dolor, sint quidem porro laudantium ipsam recusandae quas beatae libero est excepturi omnis asperiores mollitia esse magnam, dolores veritatis aut quod? Ad, necessitatibus?',
      autoria: 'Grecia',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
