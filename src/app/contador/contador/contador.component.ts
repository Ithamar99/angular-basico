import { Component } from '@angular/core';

@Component({
    selector : 'app-contador',
    template : ` 
        
    <div class="box" >
    <h1>{{titulo}}</h1>

    </div>
   
    <div class="box">
    <h3>La base es: <strong>{{base}}</strong></h3>
    </div>
    <div class="box" >
    
    <button (click)="contador(base)"> {{base}} </button>
    
    <span>{{numero}}</span>
    
    <button (click)="  contador(- base)"> -{{base}} </button>
    
    </div>

`
    
    
})
//Creacioon de componetes de manera manual 

//Se crea una clase con el nombre del componente
//Export para poder utilizar la clase en otros arcchivos

export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number =0;
    base  : number  = 2;

    contador(valor:number){
        this.numero += valor;
    }

}