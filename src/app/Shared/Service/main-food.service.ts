import { Injectable } from '@angular/core';
import {MainFood} from "../models/MainFood";
import {Ingredients} from "../models/Ingredients";

@Injectable({
  providedIn: 'root'
})
export class MainFoodService {
mainFood:MainFood[];
id=0;
  constructor() {
    this.mainFood = [
      {id:this.id++,
        Name:'StrongChicken',
        Icon:{id:2,
          type:'MeatIcon'},
        Ingredients:{id:1, type:'ASDF',foodIcon:{
          id:1,
            type:'FDSA'}
            },
        Allergen:{id:1,
          type:'Lactose'}
      }
    ]
  }
  getMainFood():MainFood[]{
    return this.mainFood;
  }
  addMainFood(mainFood: MainFood) {
    mainFood.id = this.id++;
    this.mainFood.push(mainFood);
  }
  upgradeMainFood(mainFood:MainFood){
    const foodToUpdate = this.mainFood.find(mf => mf.id === mainFood.id);
    const index = this.mainFood.indexOf(foodToUpdate);
    this.mainFood[index] = mainFood;
  }
  deleteMainFood(id: number) {
    this.mainFood = this.mainFood.filter(mf => mf.id !== id);
  }
}