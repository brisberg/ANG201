import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service'
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
	heroes: Hero[];

  constructor(private readonly heroesService: HeroesService) { }

  ngOnInit() {
  	this.heroes = this.heroesService.getHeros();
  }

}
