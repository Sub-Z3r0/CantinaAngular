import { Component, OnInit } from '@angular/core';
import {MOTD} from '../Shared/models/MOTD';
import {SpecialOffers} from '../Shared/models/SpecialOffers';
import {MainFood} from '../Shared/models/MainFood';
import {MotdService} from '../Shared/Service/motd.service';
import {MainFoodService} from '../Shared/Service/main-food.service';
import {SpecielOffersService} from '../Shared/Service/speciel-offers.service';
import {AuthenticationService} from '../Shared/Service/authentication.service';


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
  selected4 : MOTD;
  constructor(private motdService: MotdService, private  mainFoodService: MainFoodService, private specielOfferService: SpecielOffersService, private authenticationService: AuthenticationService) { }


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
    } )

  }

  saveDailyChoice() {

    if (this.selected1 != undefined)
    {
      this.mainFoodService.chooseDailyFood(this.selected1)

    }

    if (this.selected2 != undefined)
    {
      this.mainFoodService.chooseDailyFood(this.selected2)

    }

    if (this.selected3 != undefined)
    {
      this.mainFoodService.chooseDailyFood(this.selected3)
    }

  }
