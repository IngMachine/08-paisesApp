import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;

  constructor( private paisService: PaisService) { }

  buscar(): void {
    this.hayError = false;
    if ( this.termino.trim().length > 0 ){
      this.paisService.BuscarPais( this.termino )
          .subscribe( resp => {
            console.log( resp );
          }, (err) => {
            this.hayError = true;
          });
    }
  }

}
