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
  selected1 : MainFood;
  selected2 : MainFood;
  selected3 : MainFood;
  selectedOffers4: SpecialOffers;
  selectedOffers5: SpecialOffers;
  selectedOffers6: SpecialOffers ;
  selected4 : MOTD;
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
    this.authenticationService.logout();
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

    this.motdService.getMOTDAll().subscribe(listOfMotd => {
      this.motd = listOfMotd;
    } );

  }


  saveDailyChoice() {
    //current date
    this.today = new Date;
    //first selection
    if (this.selected1 != null) {
      this.recips = [];
      this.allegerns = [];
      this.selected1.FoodDate = this.today;
      for (let i  = 0; i < this.selected1.recipeLines.length ; i++) {
        const recip: RecipeLine =
          { ingredientsType: {ingredientName : this.selected1.recipeLines[i].ingredientsType.ingredientName}};
        this.recips.push(recip);
        }


      for (let i  = 0; i < this.selected1.allergensInMenu.length ; i++) {
        const alergen: AllergensInMenu =
          { allergenType: {allergenType : this.selected1.allergensInMenu[i].allergenType.allergenType}};
        this.allegerns.push(alergen);
      }
      this.selected1.recipeLines = this.recips;
      this.selected1.allergensInMenu = this.allegerns;
      this.mainFoodService.UpdateToDaily(this.selected1)
        .subscribe(() => {
          this.router.navigateByUrl('');
        });
    }
//selection 2
    if (this.selected2 != null) {
      this.recips = [];
      this.allegerns = [];
      this.selected2.FoodDate = this.today;
      for (let i  = 0; i < this.selected2.recipeLines.length ; i++) {
        const recip: RecipeLine =
          { ingredientsType: {ingredientName : this.selected2.recipeLines[i].ingredientsType.ingredientName}};
        this.recips.push(recip);
      }


      for (let i  = 0; i < this.selected2.allergensInMenu.length ; i++) {
        const alergen: AllergensInMenu =
          { allergenType: {allergenType : this.selected2.allergensInMenu[i].allergenType.allergenType}};
        this.allegerns.push(alergen);
      }
      this.selected2.recipeLines = this.recips;
      this.selected2.allergensInMenu = this.allegerns;
      this.mainFoodService.UpdateToDaily(this.selected2)
        .subscribe(() => {
          this.router.navigateByUrl('');
        });
    }
//selection 3
    if (this.selected3 != null) {
      this.recips = [];
      this.allegerns = [];
      this.selected3.FoodDate = this.today;
      for (let i  = 0; i < this.selected3.recipeLines.length ; i++) {
        const recip: RecipeLine =
          { ingredientsType: {ingredientName : this.selected3.recipeLines[i].ingredientsType.ingredientName}};
        this.recips.push(recip);
      }


      for (let i  = 0; i < this.selected3.allergensInMenu.length ; i++) {
        const alergen: AllergensInMenu =
          { allergenType: {allergenType : this.selected3.allergensInMenu[i].allergenType.allergenType}};
        this.allegerns.push(alergen);
      }
      this.selected3.recipeLines = this.recips;
      this.selected3.allergensInMenu = this.allegerns;
      this.mainFoodService.UpdateToDaily(this.selected3)
        .subscribe(() => {
          this.router.navigateByUrl('');
        });
    }
    if (this.selectedOffers4 != null) {
      this.selectedOffers4.offersDate = this.today;
      console.log(this.selectedOffers4);
      this.specielOfferService.updateOffers(this.selectedOffers4)
        .subscribe(() => {
          this.router.navigateByUrl('');
        });
    }
    if (this.selectedOffers5 != null) {
      this.selectedOffers5.offersDate = this.today;
      console.log(this.selectedOffers5);
      this.specielOfferService.updateOffers(this.selectedOffers5)
        .subscribe(() => {
          this.router.navigateByUrl('');
        });
    }
    if (this.selectedOffers6 != null) {
      this.selectedOffers6.offersDate = this.today;
      console.log(this.selectedOffers6);
      this.specielOfferService.updateOffers(this.selectedOffers6)
        .subscribe(() => {
          this.router.navigateByUrl('');
        });
    }

  }

  }





