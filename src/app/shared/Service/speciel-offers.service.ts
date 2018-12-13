import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MOTD} from '../models/MOTD';
import {MainFood} from '../models/MainFood';
import {SpecialOffers} from '../models/SpecialOffers';
import {environment} from '../../../environments/environment.prod';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecielOffersService {

  apiUrl = 'https://cantinaappdatabase.azurewebsites.net/api/SpecialOffers';
  constructor(private http: HttpClient) { }

  getSpecielFood(): Observable<SpecialOffers[]> {
    return this.http.get<SpecialOffers[]>
    (this.apiUrl);
  }
  getTodaysFood(today: Date): Observable<SpecialOffers[]> {
    return this.http.get<SpecialOffers[]>
    (this.apiUrl + '?date=2018-12-13');
  }
  getSpecielFoodById(id: number): Observable<SpecialOffers>
  {
    return this.http.get<SpecialOffers>(this.apiUrl + '/' + id);
  }

  addpecielOffers(specielOffers: SpecialOffers) {
    return this.http.post<SpecialOffers>(this.apiUrl, specielOffers);
  }

  updateOffers(offer: SpecialOffers): Observable<SpecialOffers>
  {
    return this.http.put<SpecialOffers>(this.apiUrl + '/' + offer.id, offer);
  }
}
