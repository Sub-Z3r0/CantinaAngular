import { Component, OnInit } from '@angular/core';
import {MOTD} from '../shared/models/MOTD';
import {SpecialOffers} from '../shared/models/SpecialOffers';
import {MainFood} from '../shared/models/MainFood';
import {MotdService} from '../shared/Service/motd.service';
import {MainFoodService} from '../shared/Service/main-food.service';
import {SpecielOffersService} from '../shared/Service/speciel-offers.service';
import {AuthenticationService} from '../shared/Service/authentication.service';


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
  constructor(private motdService: MotdService,
              private  mainFoodService: MainFoodService,
              private specielOfferService: SpecielOffersService,
              private authenticationService: AuthenticationService) {

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



  }


}
