import {Component, OnInit} from '@angular/core';
import {MOTD} from '../Shared/models/MOTD';
import {SpecialOffers} from '../Shared/models/SpecialOffers';
import {MainFood} from '../Shared/models/MainFood';
import {MotdService} from '../Shared/Service/motd.service';
import {MainFoodService} from '../Shared/Service/main-food.service';
import {SpecielOffersService} from '../Shared/Service/speciel-offers.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  motd: MOTD;
  mainfoods: MainFood[];
  specielOffers: SpecialOffers[];
  constructor(private motdService: MotdService, private  mainFoodService: MainFoodService, private specielOfferService: SpecielOffersService) { }

  ngOnInit() {
    this.refresh();
  }
  refresh()
  {
    this.motdService.getMOTDById(2)
      .subscribe(listOfPets => {
        this.motd = listOfPets;
      });
    this.mainFoodService.getMainFood().subscribe(listOfMenues => {
    this.mainfoods = listOfMenues;
    });
    this.specielOfferService.getSpecielFood().subscribe(listOfOffers => {
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
}
