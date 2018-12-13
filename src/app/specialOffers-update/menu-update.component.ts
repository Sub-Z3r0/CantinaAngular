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

  specielOfferForm = new FormGroup({
    specialOfferName: new FormControl(''),
    price: new FormControl(''),
    offerDate: new FormControl('')});

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
    // data static for now, later we add forms!! ;D
    const offer = this.specielOfferForm.value;
    offer.id = this.id;
    this.specielOffersService.updateOffers(offer)
      .subscribe(() => {
        this.router.navigateByUrl('');
      });
  }

}
