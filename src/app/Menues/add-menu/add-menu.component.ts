import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MainFoodService} from '../../shared/Service/main-food.service';

import {Ingredients} from '../../shared/models/Ingredients';
import {Allergen} from '../../shared/models/Allergen';
import {AllergenService} from '../../shared/Service/allergenService';
import {IngredientService} from '../../shared/Service/ingredient.service';
import {MainFood} from '../../shared/models/MainFood';
import {RecipeLine} from '../../shared/models/RecipeLine';
import {AllergensInMenu} from '../../shared/models/AllergensInMenu';
import {AuthenticationService} from "../../shared/Service/authentication.service";

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  // many to many relations
  ingredients: Ingredients[];
  allergens: Allergen[];
  today: Date;
  loading = true;
  menuForm = new FormGroup({
    mainFoodName: new FormControl(''),
    recipeLines: new FormControl(''),
    allergensInMenu: new FormControl(''),
    foodIconId: new FormControl('')
  });

  place: MainFood;
  mainFood: MainFood;
  recips: RecipeLine[] = [];
  alergenMenu: AllergensInMenu[] = [];
  isLogged : boolean = false;


  constructor(private menuService: MainFoodService,
              private allergenService: AllergenService,
              private ingredientService: IngredientService,
              private authenticationService: AuthenticationService) { }


  ngOnInit()
  {
    if (this.authenticationService.getToken()) {
      this.isLogged = true;
    }
    this.ingredientService.getIngredients()
      .subscribe(ingredients => {
        this.loading = false;
      });
  }


  save()
  {
    this.today = new Date;
    this.place = this.menuForm.value;
    let str = this.place.recipeLines.toLocaleString();
     var splitted = str.split(",");
       console.log(splitted);
    for (let i = 0; i < splitted.length; i++) {
       const recip: RecipeLine ={ingredientsType: {ingredientName :splitted[i]}}  ;

       this.recips.push(recip);
     }

    this.alergenMenu = [];
    let strAllergen = this.place.allergensInMenu.toLocaleString();
    var splittedAllegerns = strAllergen.split(",");
     for (let i = 0; i < splittedAllegerns.length; i++) {
       const allergens: AllergensInMenu = {allergenType: {allergenType : splittedAllegerns[i]}};

       this.alergenMenu.push(allergens);
     }

    this.mainFood = this.place;
    this.mainFood.foodDate = this.today;
    this.mainFood.recipeLines = this.recips;
    this.mainFood.allergensInMenu = this.alergenMenu;
    console.log(this.mainFood);

    this.menuService.addMainFood(this.mainFood)
      .subscribe(() => {

      });
  }
}
