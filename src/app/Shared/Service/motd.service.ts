import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MOTD} from '../models/MOTD';
import {environment} from '../../../environments/environment.prod';
import {MainFood} from '../models/MainFood';

@Injectable({
  providedIn: 'root'
})
export class MotdService {


  apiUrl = 'https://cantinaappdatabase.azurewebsites.net/api/motd';
  constructor(private http: HttpClient) { }

  getMOTDById(id: number): Observable<MOTD>
  {
    return this.http.get<MOTD>( this.apiUrl + '/' + id);
  }

  getMOTDAll(): Observable<MOTD[]>
  {
    return this.http.get<MOTD[]>
    (this.apiUrl);
  }
}
