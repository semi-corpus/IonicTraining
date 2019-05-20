import { Component } from '@angular/core';
import { Fruits } from '../class/fruits';
import { Vegs } from '../class/vegs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{
  fruits: Fruits[];
  vegs: Vegs[];
  newFruit: Fruits;
  newVeg: Vegs;

  constructor(){
    this.fruits = [],
    this.vegs = []
  }

  ngOnInit(): void {}

  // Fruits
  addFruit(){
    this.fruits.push(this.newFruit)
  }

  // Vegs
  addVeg(){
    this.vegs.push(this.newVeg)
  }

}
