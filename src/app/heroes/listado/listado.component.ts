import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Goku','Krillin','Vegeta','Picoro','Ghogan'];
  heroeBorrado : string = '';
  public borrarHeroe(){
     this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);


  }
}
