import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MOTD} from '../models/MOTD';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotdService {


  apiUrl = 'https://cantinaappdatabase.azurewebsites.net/api/motd';
  constructor(private http: HttpClient) { }

  getMOTDById(id: number): Observable<MOTD>
  {
    return this.http.get<MOTD>(this.apiUrl + '/' + id);
  }
}
