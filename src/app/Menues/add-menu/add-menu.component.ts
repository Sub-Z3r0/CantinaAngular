import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MainFoodService} from '../../shared/Service/main-food.service';
import {Ingredients} from '../../shared/models/Ingredients';
import {Allergen} from '../../shared/models/Allergen';
import {AllergenService} from '../../shared/Service/allergenService';
import {IngredientService} from '../../shared/Service/ingredient.service';
import {MainFood} from '../../shared/models/MainFood';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  // many to many relations
  ingredients: Ingredients[];
  mainFood: MainFood[];
  allergens: Allergen[];
  loading = true;
  foodForm = new FormGroup({
    foodSelect: new FormControl('')
  });

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

  save() {
    const value = this.foodForm.value;

    debugger;
    value.foodSelect.forEach(ingredient => {
      const prod = ingredient as Ingredients;
      ingredient.recipeLines.push({
        ingredientsId: ingredient.id
      });
    });
    value.foodSelect.forEach(alrg => {
      const prod = alrg as Allergen;
      alrg.recipeLines.push({
        ingredientsId: 0,
        mainFoodId: 0
      });
    });

    this.menuService.addMainFood(value)
      .subscribe(foodAdded => {
          });
          this.menuService.getMainFood()
            .subscribe(mFood => {
            });
  }
}
