import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','./small-card.responsive.component.css']
})
export class SmallCardComponent {
  @Input()
  photoCover:string ="https://thelastofus.com.br/wp-content/uploads/2022/07/Voz-de-Joel-em-The-Last-of-Us-no-Brasil-Luiz-Carlos-Persy-esta-oferecendo-curso-de-dublagem-1024x577.jpg"
  @Input()
  cardTitle:string="Teste 123"
  constructor (){

  }
  ngOnInit(): void{

  }
}
