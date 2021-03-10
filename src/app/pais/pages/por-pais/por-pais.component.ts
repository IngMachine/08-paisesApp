import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  buscar(): void {
    this.hayError = false;
    if ( this.termino.trim().length > 0 ){
      this.paisService.BuscarPais( this.termino )
          .subscribe( paises => {
            this.paises = paises;
          }, (err) => {
            this.hayError = true;
            // Se purga el error una forma de utilizar el error.
            this.paises = [];
          });
    }
  }

}
