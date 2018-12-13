import {Component, OnInit} from '@angular/core';
import {MOTD} from '../shared/models/MOTD';
import {SpecialOffers} from '../shared/models/SpecialOffers';
import {MainFood} from '../shared/models/MainFood';
import {MotdService} from '../shared/Service/motd.service';
import {MainFoodService} from '../shared/Service/main-food.service';
import {SpecielOffersService} from '../shared/Service/speciel-offers.service';
import {AuthenticationService} from '../shared/Service/authentication.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  motd: MOTD;
  mainfoods: MainFood[];
  count: number;
  specielOffers: SpecialOffers[];
  constructor(private motdService: MotdService, private  mainFoodService: MainFoodService, private specielOfferService: SpecielOffersService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.refresh();
  }
  refresh()
  {
    this.motdService.getMOTDAll()
      .subscribe(listOfPets => {
        this.count = listOfPets.length;

          this.motdService.getMOTDById(Math.floor(Math.random() * this.count) + 1)
          .subscribe(dailymotd => {
            this.motd = dailymotd;
          });
      });



    this.mainfoods = this.mainFoodService.readDailyFood();
    this.specielOfferService.getSpecielFood().subscribe(listOfOffers => {
      this.specielOffers = listOfOffers;

      console.log(new Date().toLocaleDateString());
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
