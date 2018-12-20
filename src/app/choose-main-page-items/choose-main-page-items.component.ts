import { Component, OnInit } from '@angular/core';
import {MOTD} from '../shared/models/MOTD';
import {SpecialOffers} from '../shared/models/SpecialOffers';
import {MainFood} from '../shared/models/MainFood';
import {MotdService} from '../shared/Service/motd.service';
import {MainFoodService} from '../shared/Service/main-food.service';
import {SpecielOffersService} from '../shared/Service/speciel-offers.service';
import {AuthenticationService} from '../shared/Service/authentication.service';
import {Router} from '@angular/router';
import {RecipeLine} from '../Shared/models/RecipeLine';
import {AllergensInMenu} from '../Shared/models/AllergensInMenu';


@Component({
  selector: 'app-choose-main-page-items',
  templateUrl: './choose-main-page-items.component.html',
  styleUrls: ['./choose-main-page-items.component.css']
})
export class ChooseMainPageItemsComponent implements OnInit {
  motd: MOTD[];
  mainfoods: MainFood[];
  specielOffers: SpecialOffers[];
  selected1: MainFood;
  selected2: MainFood;
  selected3: MainFood;
  selectedOffers4: SpecialOffers;
  selectedOffers5: SpecialOffers;
  selectedOffers6: SpecialOffers ;
  today: Date;
  recips: RecipeLine[] = [];
  allegerns: AllergensInMenu[] = [];
  constructor(private motdService: MotdService,
              private  mainFoodService: MainFoodService,
              private specielOfferService: SpecielOffersService,
              private authenticationService: AuthenticationService,
              private router: Router) {

  }


  ngOnInit() {

    this.refresh();
  }
  refresh()
  {

    this.mainFoodService.getMainFood().subscribe(listOfMenues => {
      this.mainfoods = listOfMenues;
    });

    this.specielOfferService.getSpecielFood().subscribe(listOfOffers => {
      this.specielOffers = listOfOffers;
    });


  }

  saveDailyFood(food: MainFood)
  {
    this.recips = [];
    this.allegerns = [];
    food.foodDate = this.today;
    for (let i  = 0; i < food.recipeLines.length ; i++) {
      const recip: RecipeLine =
        { ingredientsType: {ingredientName : food.recipeLines[i].ingredientsType.ingredientName}};
      this.recips.push(recip);
    }


    for (let i  = 0; i < food.allergensInMenu.length ; i++) {
      const alergen: AllergensInMenu =
        { allergenType: {allergenType : food.allergensInMenu[i].allergenType.allergenType}};
      this.allegerns.push(alergen);
    }
    food.recipeLines = this.recips;
    food.allergensInMenu = this.allegerns;
    this.mainFoodService.UpdateToDaily(food).subscribe(() =>
      this.router.navigateByUrl('/') );
  }

  saveDaylyOffer(offer: SpecialOffers)
  {


    offer.offersDate = this.today;
    this.specielOfferService.updateOffers(offer).subscribe(() =>
      this.router.navigateByUrl('/') );
  }

  saveDailyChoice() {
    this.today = new Date;
    //first selection
    if (this.selected1 != null) {
     this.saveDailyFood(this.selected1);
    }

//selection 2
    if (this.selected2 != null) {
      this.saveDailyFood(this.selected2);
    }

//selection 3
    if (this.selected3 != null) {
      this.saveDailyFood(this.selected3);
    }

    if (this.selectedOffers4 != null) {
      this.saveDaylyOffer(this.selectedOffers4);
    }

    if (this.selectedOffers5 != null) {
      this.saveDaylyOffer(this.selectedOffers5);

    }
    if (this.selectedOffers6 != null) {
      this.saveDaylyOffer(this.selectedOffers6);
    }

  }

  }





