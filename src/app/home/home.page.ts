import { Component } from '@angular/core';
import { Fruit } from '../class/fruits';
import { Veg } from '../class/vegs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{
  fruits: Array<Fruit> = [];
  vegs: Array<Veg> = [];
  newFruit: Fruit;
  newVeg: Veg;


  constructor(){
    this.fruits = [{
      name: 'Kiwi',
      price: .70
    }];
    this.vegs = [{
      name: 'Carotte',
      price: .75
    }];
    this.newFruit = new Fruit();
    this.newVeg = new Veg();
  }

  ngOnInit(): void {}

  // Fruits
  addFruit(){
    this.fruits.push(this.newFruit)
    this.newFruit = new Fruit()
  }

  // Vegs
  addVeg(){
    this.vegs.push(this.newVeg)
    this.newVeg = new Veg()
  }

  // Delete Fruits
  deleteFruits(i:any){
    this.fruits.splice(i)
  }  
  
  // Delete Vegs
  deleteVegs(i:any){
    this.vegs.splice(i)
  }
}
