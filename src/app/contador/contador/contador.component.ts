import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
            <h1>Contador App</h1>

            <strong>La base es: {{base}}</strong>
            <br>
            <button (click)="incrementar(base)">+{{base}}</button>
            {{numero}}
            <button (click)="incrementar(-base)">-{{base}}</button>
    `
})



export class ContadorComponent{
    title: string = 'Contador App';
    numero: number = 0; 
    base: number = 25;
  
  
  incrementar(valor: number){
    this.numero += valor; 
  } 
}