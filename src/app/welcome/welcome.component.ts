import {Component, OnInit} from '@angular/core';
import {MOTD} from '../shared/models/MOTD';
import {SpecialOffers} from '../shared/models/SpecialOffers';
import {MainFood} from '../shared/models/MainFood';
import {MotdService} from '../shared/Service/motd.service';
import {MainFoodService} from '../shared/Service/main-food.service';
import {SpecielOffersService} from '../shared/Service/speciel-offers.service';
import {AuthenticationService} from '../shared/Service/authentication.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  id: number;
  today: Date;
  motdList: MOTD[];
  motd: MOTD;
  mainfoods: MainFood[];
  specielOffers: SpecialOffers[];
  allergenList : string[];
  loggedIn: boolean;
  specielOfferForm = new FormGroup({
    specialOfferName: new FormControl(''),
    price: new FormControl('')});
  allergenForm: FormGroup;
  constructor(private motdService: MotdService,
              private mainFoodService: MainFoodService,
              private specielOffersService: SpecielOffersService,
              private router: Router,
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
    this.motdService.getMOTDAll().subscribe(m =>
    {
      this.motdList = m;
      this.motdService.getMOTDById(this.motdList[Math.floor(Math.random()*this.motdList.length)+1].id)
        .subscribe(listOfMessages => {
          this.motd = listOfMessages;
        });
    })
    this.mainFoodService.getDailyMainfood(new Date()).subscribe(listOfMenues => {
      this.mainfoods = listOfMenues;
    });
    this.specielOffersService.getTodaysFood(new Date()).subscribe(listOfOffers => {
      this.specielOffers = listOfOffers;
    });
  }


  save()
  {
    this.today = new Date;
    // data static for now, later we add forms!! ;D

    const pet = this.specielOfferForm.value;
    pet.id = this.id;
    pet.offersDate = this.today;
    console.log(pet);
    this.specielOffersService.updateOffers(pet)
      .subscribe(() => {
        window.location.reload();
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
    this.specielOffersService.deleteSpecial(id)
      .subscribe(m => {
        this.refresh();
      });
  }
  updateSpecielOffer(id: number)
  {
    this.specielOffersService.getSpecielFoodById(id)
      .subscribe(offers => {
        this.id = id;
        this.specielOfferForm.patchValue({
          specialOfferName: offers.specialOfferName,
          price: offers.price,
          offerDate: offers.offersDate
        });
      });
    document.getElementById('id04').style.display='block';

  }
}
