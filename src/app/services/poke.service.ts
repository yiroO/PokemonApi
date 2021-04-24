import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {

  pokeData: any[] = [];
  endPoint = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<any[]> {
    return this.http.get<any[]>(`${this.endPoint}/pokemon`);
  }

  // tslint:disable-next-line: typedef
  getPokemonid(id: number): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/pokemon/${id}`);
  }

  buscarPokemon(termino: string){
    let pokemonArr: any[] = [];
    termino = termino.toLowerCase();
    console.log('servicio');
    console.log('service ', `${this.endPoint}/pokemon/${termino}` );
    return this.http.get<any>(`${this.endPoint}/pokemon/${termino}`);
  }
}
