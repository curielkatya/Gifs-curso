import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: []
})
export class ResultadosComponent  {


  constructor( private GifsService: GifsService ) { }
  
  get resultado (){
    return this.GifsService.resultado;
  }
  

}
