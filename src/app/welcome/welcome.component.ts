import {Component, OnInit} from '@angular/core';
import {MOTD} from '../shared/models/MOTD';
import {SpecialOffers} from '../shared/models/SpecialOffers';
import {MainFood} from '../shared/models/MainFood';
import {MotdService} from '../shared/Service/motd.service';
import {MainFoodService} from '../shared/Service/main-food.service';
import {SpecielOffersService} from '../shared/Service/speciel-offers.service';
import {AuthenticationService} from '../shared/Service/authentication.service';
import {Users} from '../shared/models/Users';
import {RecipeLine} from "../Shared/models/RecipeLine";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  motd: MOTD;
  mainfoods: MainFood[];
  specielOffers: SpecialOffers[];
  allergenList : string[];
  loggedIn: boolean;
  allergenForm: FormGroup;

  constructor(private motdService: MotdService,
              private  mainFoodService: MainFoodService,
              private specielOfferService: SpecielOffersService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.refresh();
    this.allergenForm = new FormGroup({
      allergen: new FormControl('')
    });
  }
  refresh()
  {
    if (this.authenticationService.getToken()) {
      this.loggedIn = true;
    }
    this.motdService.getMOTDById(2)
      .subscribe(listOfMessages => {
        this.motd = listOfMessages;
      });
    this.mainFoodService.getDailyMainfood(new Date()).subscribe(listOfMenues => {
    this.mainfoods = listOfMenues;
    });
    this.specielOfferService.getTodaysFood(new Date()).subscribe(listOfOffers => {
      this.specielOffers = listOfOffers;
    });
  }

  PopUp() {
    document.getElementById('PopUpWindow').style.display='block';
    window.scrollTo({
      top: 0,
      left: 1,
      behavior: 'smooth'
    });
  }
  deleteMainFood(id: number)
  {
    this.mainFoodService.deleteFood(id)
      .subscribe(m => {
        this.refresh();
      });
  }
  deleteSpecialFood(id: number)
  {
    this.specielOfferService.deleteSpecial(id)
      .subscribe(m => {
        this.refresh();
      });
  }
}
