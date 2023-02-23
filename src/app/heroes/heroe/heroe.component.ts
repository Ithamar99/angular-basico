import { Component } from "@angular/core";


@Component({
    selector   : 'app-heroe',
    templateUrl: 'heroe.Component.html'

})

export class HeroeComponent{
    titulo: string ='Heore';
    nombre: string ='Batman';
    edad: number = 40;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }
    obtenerDatos(): string {
        return `${ this.nombre } - ${ this.edad } `;
    }

    cambiarNombre(): void{
        this.nombre = 'Super Man';
    }

    cambiarEdad(): void{
        this.edad = 20;
    }
}