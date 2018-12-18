import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SpecielOffersService} from '../shared/Service/speciel-offers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-specieloffers',
  templateUrl: './add-specieloffers.component.html',
  styleUrls: ['./add-specieloffers.component.css']
})
export class AddSpecieloffersComponent implements OnInit {

  today: Date;
  specielOfferForm = new FormGroup({
    specialOfferName: new FormControl(''),
    price: new FormControl('')});

  constructor(private specielOffersService: SpecielOffersService, private router: Router) { }

  ngOnInit() {
  }
  save()
  {
    this.today = new Date();
    // data static for now, later we add forms!! ;D
    const specielOffers = this.specielOfferForm.value;
    specielOffers.offersDate = this.today;
    this.specielOffersService.addpecielOffers(specielOffers)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }

}
