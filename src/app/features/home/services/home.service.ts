import { Injectable, Inject } from '@angular/core';
import { HomeDataStats, UserLocation } from '../models/stat.models';
import { DOCUMENT } from '@angular/common';
import { combineLatest, Observable, Observer } from 'rxjs';
import { map, skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private window: Window = this.document.defaultView;

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  getLocation(): Observable<UserLocation> {
    return new Observable((observer: Observer<UserLocation>) => {
      if ('geolocation' in this.window.navigator) {
        this.window.navigator.geolocation.getCurrentPosition((position: Position) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          observer.complete();
        });
      } else {
        // If the location can't be fetched set lat lng to London coords
        const defaultLocation: UserLocation = {
          latitude: 51.5,
          longitude: 0.12
        };
        observer.next(defaultLocation);
        observer.complete();
      }
    });
  }

  getCountry(results: google.maps.GeocoderResult[]): string {
    let country: string;
    results.forEach((res) => {
      if (res.types[0] === 'country') {
        country = res.address_components[0].short_name;
      } else if (res.types[0] === 'political') {
        country = res.address_components[0].short_name;
      } else {
        country = 'UK';
      }
    });

    return country;
  }

  getUserLocation(request: google.maps.GeocoderRequest): Observable<string> {
    return new Observable(observer => {
      const geocoder = new google.maps.Geocoder();
      return geocoder.geocode(request, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const userLocation = results[0] ? this.getCountry(results) : 'UK';
          observer.next(userLocation);
        } else {
          observer.next('UK');
        }
        observer.complete();
      });
    });
  }

  getLocalStats(data$: Observable<HomeDataStats>, userLocation$: Observable<string>): Observable<any> {
    return combineLatest([data$, userLocation$]).pipe(
      skip(1),
      map(([stats, location]) => {
        const res = stats.tableData.find((stat) => stat.data.country === location) ||
          stats.tableData.find((stat) => stat.data.country === 'UK');
        return res.data;
      }));
  }
}

