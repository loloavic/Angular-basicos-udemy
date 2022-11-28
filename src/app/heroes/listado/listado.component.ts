import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

    heroes: string[] = ['Spiderman', 'Ironman', 'Batman', 'Goku', 'Superman'];
    heroeBorrado: string = '';
    
        borrar(){
          this.heroeBorrado = this.heroes.shift() || '' ;
          }

     

  }


