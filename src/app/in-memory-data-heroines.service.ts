import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero }  from './models/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataHeroinesService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 32, name: 'Drs. Nicea' },
      { id: 33, name: 'Bombasta' },
      { id: 34, name: 'Celeritasa' },
      { id: 35, name: 'Magnetaa' },
      { id: 36, name: 'RubberWoman' },
      { id: 37, name: 'Dynamaa' },
      { id: 38, name: 'Drs. IQ' },
      { id: 39, name: 'Magmaa' },
      { id: 40, name: 'Tornada' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
