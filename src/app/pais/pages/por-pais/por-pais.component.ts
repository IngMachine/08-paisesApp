import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencia: boolean = false;

  constructor( private paisService: PaisService) { }

  buscar( termino: string ): void {
    this.mostrarSugerencia = false;
    this.hayError = false;
    this.termino = termino;
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

  sugerencias( termino: string): void{
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.paisService.BuscarPais(termino)
      .subscribe( paises => {
        this.paisesSugeridos = paises.splice(0, 5);
      },
       err => this.paisesSugeridos = []);
  }

  buscarSugerido( termino: string ): void {
    this.buscar( termino );
  }

}
