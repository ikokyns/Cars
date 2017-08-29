import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Car } from '../../shared/model/car-model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

	private cars: any = [];
	
	constructor(private carsService: CarsService) {
		carsService.getCars().subscribe(data => {
			this.cars = data;
		},
		(err: HttpErrorResponse) => {
			alert(`Backend returned code ${err.status} with message: ${err.error}`);
		});
	}

  ngOnInit() {
  }

}
