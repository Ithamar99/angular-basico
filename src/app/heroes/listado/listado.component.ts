import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
    //Arreglo de heroes
      heroes: string [] = [ 'Batman','Super Man','Flash','Capitan' ];
      heroeBorrado: string = '';
     
    
    borrar(){
      this.heroeBorrado = this.heroes.shift() || '';
    }
    
}
