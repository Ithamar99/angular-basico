import { Component, OnInit} from '@angular/core';


import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {
 
  
  nuevo : Personaje ={
     nombre: '',
     poder: 0

  }

  get personajes():Personaje []{
    return this.dbzServices.personajes
  }
  agregarNuevoPersonaje( argumento: Personaje ){

    this.personajes.push( argumento );

  }

  constructor( private dbzServices: DbzService){
   
  }
}