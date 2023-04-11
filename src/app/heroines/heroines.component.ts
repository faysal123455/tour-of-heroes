import { Component, OnInit } from '@angular/core';

import { Hero }  from '../models/hero';
import { HeroinesService } from '../heroines.service';

@Component({
  selector: 'app-heroines',
  templateUrl: './heroines.component.html',
  styleUrls: ['./heroines.component.css']
})
export class HeroinesComponent implements OnInit {
  heroines: Hero[] = [];

  constructor(private heroinService: HeroinesService) { }

  ngOnInit(): void {
    this.getHeroines();
  }

  getHeroines(): void {
    this.heroinService.getHeroes()
    .subscribe(heroines => this.heroines = heroines);
  }


/* new */


}
