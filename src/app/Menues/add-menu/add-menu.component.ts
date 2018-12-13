import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MainFoodService} from '../../shared/Service/main-food.service';
import {AuthenticationService} from '../../shared/Service/authentication.service';
import {MainFood} from '../../Shared/models/MainFood';
import {stringify} from 'querystring';
import {forEach} from '@angular/router/src/utils/collection';
import {RecipeLine} from '../../Shared/models/RecipeLine';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menuForm = new FormGroup({
    mainFoodName: new FormControl(''),
    recipeLines: new FormControl(''),
    allergensTypeId: new FormControl(''),
    foodIconId: new FormControl('')
  });
  constructor(private menuService: MainFoodService) { }
place: MainFood;
  mainFood: MainFood;
recips: RecipeLine[] = [];
  ngOnInit()
  {

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
