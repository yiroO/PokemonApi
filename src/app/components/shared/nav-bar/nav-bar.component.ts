import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../../services/poke.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
  }

}
