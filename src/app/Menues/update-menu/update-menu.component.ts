import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SpecielOffersService} from '../../shared/Service/speciel-offers.service';
import {MainFoodService} from '../../shared/Service/main-food.service';
import {forEach} from '@angular/router/src/utils/collection';
import {of} from 'rxjs';
import {MainFood} from '../../shared/models/MainFood';
import {RecipeLine} from '../../shared/models/RecipeLine';
import {AllergensInMenu} from '../../shared/models/AllergensInMenu';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {

  constructor(private route: ActivatedRoute, private mainFoodService: MainFoodService, private router: Router) { }
  recips: RecipeLine[] = [];
  alergenMenu: AllergensInMenu[] = [];
  id: number;
  today: Date;

  mainFoodForm = new FormGroup({
    mainFoodName: new FormControl(''),
    recipeLines: new FormControl( ''),
    allergensInMenu: new FormControl( '')
  });

  private void
  ngOnInit() {
    this.id = + this.route.snapshot.paramMap.get('id');

    this.mainFoodService.getFoodById(this.id)
      .subscribe(mFood => {
        var recips = '';
        for (let recip of mFood.recipeLines) {
          recips = recips + recip.ingredientsType.ingredientName + ','  ;
        }
       recips = recips.substring(0, recips.length - 2);
        var allergens = '';
        for (let allergen of mFood.allergensInMenu) {
          allergens = allergens + allergen.allergenType.allergenType + ','  ;
        }
        allergens = allergens.substring(0, allergens.length - 2);
        this.mainFoodForm.patchValue({
          mainFoodName: mFood.mainFoodName,
          recipeLines: recips,
          date: mFood.foodDate,
          allergensInMenu: allergens
        });
      });
  }

  save()
  {
    this.today = new Date;

    const mainFood = this.mainFoodForm.value;
    mainFood.foodIconId = 0 ;

    if ( mainFood.recipeLines.toString() !== "") {
      let str = mainFood.recipeLines.toLocaleString();
      var splitted = str.split(",");
      console.log(splitted);
      for (let i = 0; i < splitted.length; i++) {
        const recip: RecipeLine = {ingredientsType: {ingredientName: splitted[i]}};

        this.recips.push(recip);
      }
      mainFood.recipeLines = this.recips;
    }

    if ( mainFood.allergensInMenu.toString() !== "") {
      let strAllergen = mainFood.allergensInMenu.toLocaleString();
      var splittedAllegerns = strAllergen.split(",");
      for (let i = 0; i < splittedAllegerns.length; i++) {
        const allergens: AllergensInMenu = {allergenType: {allergenType: splittedAllegerns[i]}};
        this.alergenMenu.push(allergens);
      }
      mainFood.allergensInMenu = this.alergenMenu;
    }


    mainFood.foodDate= this.today;


    mainFood.id = this.id;
    this.mainFoodService.UpdateToDaily(mainFood)
      .subscribe(() => {
        this.router.navigateByUrl('');
      });
  }
}
