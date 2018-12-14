import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MainFoodService} from '../../shared/Service/main-food.service';

import {Ingredients} from '../../shared/models/Ingredients';
import {Allergen} from '../../shared/models/Allergen';
import {AllergenService} from '../../shared/Service/allergenService';
import {IngredientService} from '../../shared/Service/ingredient.service';
import {MainFood} from '../../shared/models/MainFood';
import {RecipeLine} from '../../Shared/models/RecipeLine';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  // many to many relations
  ingredients: Ingredients[];
  allergens: Allergen[];
  loading = true;
  foodForm = new FormGroup({
    foodSelect: new FormControl('')
  });

place: MainFood;
  mainFood: MainFood;
recips: RecipeLine[] = [];


  constructor(private menuService: MainFoodService,
              private allergenService: AllergenService,
              private ingredientService: IngredientService) { }


  ngOnInit()
  {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => {
        this.loading = false;
      });
  }
  today: Date;
  save()
  {
    this.today = new Date;
    this.recips = [];
    this.place = this.menuForm.value;
    var str = this.place.recipeLines;
    var splitted = str.split(",");
      console.log(splitted);
    for (let i = 0; i < splitted.length; i++) {
      const recip: RecipeLine ={ingredientsType{ingredientName :splitted[i]}}  ;

      this.recips.push(recip);
    }

    this.mainFood = this.place;
    this.mainFood.FoodDate= this.today;
    this.mainFood.recipeLines = this.recips;
    console.log(this.mainFood);

    this.menuService.addMainFood(this.mainFood)
      .subscribe(() => {

      });
    
  }
}
