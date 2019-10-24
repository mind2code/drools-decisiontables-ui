import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Souscription } from './souscription';

@Injectable({
  providedIn: 'root'
})
export class DroolsService {

  constructor(private http: HttpClient) { }

  simulate(souscription: Souscription): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    console.log('SERVICE');
    console.log(souscription);
    return this.http.post(`http://localhost:8080/souscription`, souscription, httpOptions);
  }

}
