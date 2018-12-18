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
import {AuthenticationService} from '../../shared/Service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

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
  isLogged = false;


  constructor(private menuService: MainFoodService,
              private allergenService: AllergenService,
              private ingredientService: IngredientService,
              private authenticationService: AuthenticationService,
              private router: Router) { }


  ngOnInit() {
    if (this.authenticationService.getToken()) {
      this.isLogged = true;
    }
   
  }


  save() {
    this.today = new Date;


    this.place = this.menuForm.value;
      this.mainFood = this.place;
    if (this.place.recipeLines.toString() !== "") {

    const str = this.place.recipeLines.toLocaleString();
    const splitted = str.split(',');
    console.log(splitted);
    for (let i = 0; i < splitted.length; i++) {
      const recip: RecipeLine = {ingredientsType: {ingredientName: splitted[i]}};

      this.recips.push(recip);
    }
    this.mainFood.recipeLines = this.recips;
  }
  if ( this.place.recipeLines.toString() !== "") {
    this.alergenMenu = [];
    const strAllergen = this.place.allergensInMenu.toLocaleString();
    const splittedAllegerns = strAllergen.split(',');
    for (let i = 0; i < splittedAllegerns.length; i++) {
      const allergens: AllergensInMenu = {allergenType: {allergenType: splittedAllegerns[i]}};

      this.alergenMenu.push(allergens);
    }
    this.mainFood.allergensInMenu = this.alergenMenu;
  }

    this.mainFood.foodDate = this.today;


    console.log(this.mainFood);

    this.menuService.addMainFood(this.mainFood)
      .subscribe(() => {
        this.router.navigateByUrl('');
      });
  }
}
