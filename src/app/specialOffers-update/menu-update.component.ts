import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SpecielOffersService} from '../shared/Service/speciel-offers.service';

@Component({
  selector: 'app-menu-update',
  templateUrl: './menu-update.component.html',
  styleUrls: ['./menu-update.component.css']
})
export class MenuUpdateComponent implements OnInit {

  id: number;
  today: Date;

  specielOfferForm = new FormGroup({
    specialOfferName: new FormControl(''),
    price: new FormControl('')});

  constructor(private route: ActivatedRoute, private specielOffersService: SpecielOffersService, private router: Router) { }

  ngOnInit() {
    this.id = + this.route.snapshot.paramMap.get('id');

    this.specielOffersService.getSpecielFoodById(this.id)
      .subscribe(offers => {
        this.specielOfferForm.patchValue({
          specialOfferName: offers.specialOfferName,
          price: offers.price,
          offerDate: offers.offersDate
        });
      });
  }

  save()
  {
    this.today = new Date;

    const special = this.specielOfferForm.value;
    special.id = this.id;
    special.offersDate = this.today;
    this.specielOffersService.updateOffers(special)
      .subscribe(() => {
        this.router.navigateByUrl('');
      });
  }

}
