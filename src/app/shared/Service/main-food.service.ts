import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MOTD} from '../models/MOTD';
import {MainFood} from '../models/MainFood';
import {environment} from '../../../environments/environment.prod';
import {Observable} from 'rxjs';
import {isFatalDiagnosticError} from '@angular/compiler-cli/src/ngtsc/diagnostics';
import {SpecialOffers} from '../models/SpecialOffers';

@Injectable({
  providedIn: 'root'
})
export class MainFoodService {
  apiUrl = 'https://cantinaappdatabase.azurewebsites.net/api/mainFood';
  constructor(private http: HttpClient) {

  }

  getMainFood(): Observable<MainFood[]>
  {
    return this.http.get<MainFood[]>
    (this.apiUrl);
  }


  addMainFood(mainFood : MainFood): Observable<MainFood>
  {
    return this.http.post<MainFood>(this.apiUrl, mainFood);
  }

  UpdateToDaily(mainFood: MainFood): Observable<MainFood> {
   return this.http.put<MainFood>(this.apiUrl + '/' + mainFood.id, mainFood);

  }

  getDailyMainfood(date: Date): Observable<MainFood[]>  {
    return this.http.get<MainFood[]>
    (this.apiUrl + '?date=' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());
  }

  deleteFood(id: number): Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  getFoodById(id: number): Observable<MainFood> {
    return this.http.get<MainFood>(this.apiUrl + '/' + id);
  }
}
