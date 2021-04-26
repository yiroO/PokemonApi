import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pokeId: any = {};
  poke: any = '';
  type = [];
  abilities = [];
  pokeImg = '';
  weight: number;
  respons: any;
  data: {};

  constructor(private pokeServise: PokeService ,private routeActiv: ActivatedRoute) {
    this.routeActiv.params.subscribe(
      params => {
        this.getPokemonId(params['id']);
      }
      );
  }

  ngOnInit(): void {
  }

  getPokemonId(id: number){
    this.pokeServise.getPokemonid(id).subscribe(
      (resp: any) =>{
        this.poke = resp.name;
        this.type = resp.types[0].type.name;
        this.abilities = resp.abilities[0].ability.name;
        this.pokeImg = resp.sprites.front_default;
        // this.weight = resp.weight;
        this.respons = resp;
        console.log('data', resp);
      }
    );

  }

}
