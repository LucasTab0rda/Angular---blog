import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css','./big-card.responsive.component.css']
})
export class BigCardComponent {
  @Input()
  photoCover:string= ""
  @Input()
  cardTitle:string="Nova versão de Thor em 'God Of War' é revelada"
  @Input()
  cardDescription="Agora sim, Thor tem sua aparência revelada em 'God of War' sequência produzida pelo estudio Santa Mônica"

  constructor(){

  }

  ngOnInit(): void {

  }
}
