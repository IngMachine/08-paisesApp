import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  paises: Country[] = [];
  regionActiva: string = '';

  getClassCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary me-1' : 'btn btn-outline-primary me-1';
  }

  activarRegion( region: string ): void{

    if ( region === this.regionActiva ) { return; }

    this.regionActiva = region;

    // TODO: hacer el llamado al servicio
    this.paisService.BuscarRegion( region )
      .pipe(
        tap( console.log )
      )
      .subscribe( paises => this.paises = paises );
  }

  constructor( private paisService: PaisService) { }

}
