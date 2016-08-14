import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
//
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({

  selector: 'my-heroes',
  styleUrls: ['app/heroes.component.css'],
  templateUrl: 'app/heroes.component.html'

})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private router: Router) {

  }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroesSlowly().then(heroes => { this.heroes = heroes });
  }
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
