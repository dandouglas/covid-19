import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { CountryStat } from '../../dashboard/models/country-stat';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getWorldData(): Observable<CountryStat[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host':  'covid-193.p.rapidapi.com',
        'x-rapidapi-key': environment.rapidapiKey
      })
    };

    const url = 'https://covid-193.p.rapidapi.com/statistics';
    return this.httpClient.get<any>(url, httpOptions).pipe(map((data) => data.response));
  }
}
