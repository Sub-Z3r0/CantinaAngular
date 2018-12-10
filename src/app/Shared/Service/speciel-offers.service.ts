import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MOTD} from '../models/MOTD';
import {MainFood} from '../models/MainFood';
import {SpecialOffers} from '../models/SpecialOffers';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SpecielOffersService {

  apiUrl = 'api/SpecialOffers';
  constructor(private http: HttpClient) { }

  getSpecielFood(): Observable<SpecialOffers[]>
  {
    return this.http.get<SpecialOffers[]>
    (environment.apiUrl+this.apiUrl);
  }
}
