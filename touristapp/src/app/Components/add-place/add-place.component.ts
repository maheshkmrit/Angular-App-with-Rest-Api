import { Component } from '@angular/core';
import { PlaceService } from 'src/app/Services/place.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css'],
})
export class AddPlaceComponent {
  Name: string = '';
  PinCode: number = 0;
  State: string = '';
  Significance: string = '';
  Description: string = '';
  ImageFiles: any[] = [];
  ImagePath: string = '';

  constructor(private service: PlaceService) {}

  onAddImage() {
    this.ImageFiles.push({ ImageSource: this.ImagePath });
  }

  onAddNewPlace() {
    debugger;
    let place = {} as any;
    place.Name = this.Name;
    place.PinCode = this.PinCode;
    place.State = this.State;
    place.Description = this.Description;
    place.Significance = this.Significance;
    place.ImageFiles = this.ImageFiles;
    this.service.addNewPlace(place).subscribe((data) => {
      alert('place stored Successful');
    });
  }

  showMyContainer: boolean = false;
}
