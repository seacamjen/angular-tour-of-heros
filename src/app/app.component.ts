import { Component } from '@angular/core';
import { Hero } from './hero.model';

const HEROES: Hero[] = [
  {id: 11, name: 'Windslow'},
  {id: 12, name: 'Barty'},
  {id: 13, name: 'Cravens'},
  {id: 14, name: 'Firenor'},
  {id: 15, name: 'Dynama'},
  {id: 16, name: 'Tornado'},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heros';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
