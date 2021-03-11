import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

   private apiUrl: string = 'https://restcountries.eu/rest/v2';

   get httpParams(): HttpParams {
     return new HttpParams()
                           .set('fields', 'name;capital;alpha2Code;flag;population');
   }

  constructor( private http: HttpClient ) { }

  BuscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  BuscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams }  );
  }

  BuscarRegion( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams }  );
  }

  getPaisPorAlpha( id: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url);
  }


}
