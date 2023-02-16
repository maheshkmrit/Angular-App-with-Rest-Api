import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../Model/place';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  url: string = 'http://localhost:56547/api/places';
  constructor(private proxy: HttpClient) {} //the angular creates an object of the type httpClient and makes that as
  public getAllPlaces(): Observable<Place[]> {
    return this.proxy.get<Place[]>(this.url);
  }

  public getAllImages(PlaceId: number): any {
    const tempUrl = this.url + '/Images/' + PlaceId;
    return this.proxy.get(tempUrl);
  }

  addNewPlace(postedData: any) {
    const tempUrl = 'http://localhost:56547/api/places/Tourist';
    return this.proxy.post(tempUrl, postedData);
  }
}
