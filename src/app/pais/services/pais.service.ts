import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

   private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  BuscarPais( termino: string ): Observable<any> {

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get( url );
  }


}