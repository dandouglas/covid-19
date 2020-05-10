import { Injectable, Inject } from '@angular/core';
import { CountryStat, UserLocation } from '../models/country-stat';
import { DOCUMENT } from '@angular/common';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private window: Window = this.document.defaultView;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private homeService: HomeService,
  ) { }

  nonCountryFilter(stat: CountryStat): boolean {
    return stat.country !== 'All' && stat.country !== 'Europe' && stat.country !== 'North-America'
      && stat.country !== 'Diamond-Princess-';
  }

  tableDataMap(stat: CountryStat): any {
    return {
      data: {
        country: stat.country,
        totalCases: stat.cases.total,
        newCases: stat.cases.new !== null ? parseInt(stat.cases.new.replace('+', ''), 10) : null,
        totalDeaths: stat.deaths.total,
        newDeaths: stat.deaths.new !== null ? parseInt(stat.deaths.new.replace('+', ''), 10) : null,
        critical: stat.cases.critical,
        recovered: stat.cases.active,
      }
    };
  }

  findAll(stat: CountryStat): boolean {
    return stat.country === 'All';
  }

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
          const userLocation = results[0] ? this.homeService.getCountry(results) : 'UK';
          observer.next(userLocation);
        } else {
          observer.next('UK');
        }
        observer.complete();
      });
    });
  }
}

