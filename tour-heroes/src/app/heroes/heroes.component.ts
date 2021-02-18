import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './heroes-mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  hero : Hero = { id : 1 , name : 'spider man'};
  heroes = HEROES;
  selectedHeroe : Hero = { id:0, name:''};

  constructor() { }

  ngOnInit(): void {
  }

  onSelectHeroe(h : Hero){
      this.selectedHeroe = h;
      console.log(this.selectedHeroe);
  }

}
