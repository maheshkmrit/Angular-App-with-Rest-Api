import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/Model/place';
import { PlaceService } from 'src/app/Services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
})
export class PlacesComponent implements OnInit {
  places: Place[] = [];
  selectedPlace: Place = {} as Place;
  selectedImages: string[] = [];
  searchCondition: string = '';

  constructor(private service: PlaceService) {}

  ngOnInit(): void {
    this.service.getAllPlaces().subscribe((data: Place[]) => {
      this.places = data;
    });
  }

  onDetail(place: Place) {
    this.selectedPlace = place;
    let observableObj = this.service.getAllImages(this.selectedPlace.PlaceId);

    let tempdata: any[] = [];
    observableObj.subscribe((data: any[]) => {
      for (const img of data) {
        let tempImg = img.ImageSource.replace('./', '/');
        tempdata.push('assets' + tempImg);
      }
      this.selectedImages = tempdata;
    });
  }

  showMyContainer: boolean = false;
}
