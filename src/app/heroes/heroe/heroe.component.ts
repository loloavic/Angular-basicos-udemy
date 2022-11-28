import { style } from "@angular/animations";
import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    
   
    
    
})

export class HeroeComponent {
    nombre  : string = 'Ironman';
    edad    : number = 33;

    obtenerNombre() : string {
    return `${ this.nombre } - ${ this.edad } `;
    }

    get capitalizado(): string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Superman';
    }

    cambiarEdad(): void {
        this.edad = 25;
    }

}