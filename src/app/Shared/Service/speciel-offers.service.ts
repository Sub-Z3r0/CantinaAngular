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

  addpecielOffers(specielOffers: SpecialOffers) {
    return this.http.post<SpecialOffers>(this.apiUrl, specielOffers);
  }
}
