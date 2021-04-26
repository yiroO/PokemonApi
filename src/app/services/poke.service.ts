import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeService {

  endPoint = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<any[]> {
    return this.http.get<any[]>(`${this.endPoint}/pokemon`);
  }

  // tslint:disable-next-line: typedef
  getPokemonid(id: number): Observable<any> {
    return this.http.get<any>(`${this.endPoint}/pokemon/${id}`);
  }
}
