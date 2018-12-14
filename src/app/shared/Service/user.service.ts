import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {Users} from '../models/Users';
import {environment} from '../../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': 'ny-ath-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {  }

  getItems(): Observable<Users[]>{
    // add authorization header with jwt token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    //get users from application
    return this.http.get<Users[]>(environment.apiUrl + 'api/authentication', httpOptions);
  }

}
