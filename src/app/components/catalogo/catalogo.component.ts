import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PokeService } from '../../services/poke.service';
import { MatPaginator } from '@angular/material/paginator';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  filter = '';
  searchPokemon:any[] = [];
  displayedColumns: string[] = ['id', 'img' , 'nombre'];
  pokmonData: any[] = [];
  dataSource = new MatTableDataSource<any>(this.pokmonData);
  pokemon = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private pokeService: PokeService, private route: Router) {}

  ngOnInit(): void {
    let data;
    for (let i = 1; i < 150; i++) {
      this.pokeService.getPokemonid(i).subscribe(
        (resp: any) => {
          console.log('resp', resp);
          data = {
            nombre: resp.name,
            img: resp.sprites.front_default,
            id: resp.id
          };
          this.pokmonData.push(data);
          this.dataSource = new MatTableDataSource<any>(this.pokmonData);
          this.dataSource.paginator = this.paginator;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  verHeroe(i:number){
    if(i > 0 || i != undefined){
      // tslint:disable-next-line: no-unused-expression
      this.route.navigate(['/detalle', i]);
    }
    console.log('id', i);
  }

  buscarPokemon(termino:string){
    this.pokeService.buscarPokemon(termino).subscribe(
      data =>{
        this.searchPokemon = data.name;
        console.log('searchPokemon', this.searchPokemon);
      }
    );
  }

}
