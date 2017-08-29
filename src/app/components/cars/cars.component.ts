import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Car } from '../../shared/model/car-model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})

export class CarsComponent implements OnInit {
	
	private cars: any = [];
	private newCar: Car = new Car();
	
	constructor(private carsService: CarsService) {
		carsService.getCars().subscribe(data => {
			this.cars = data;
		},
		(err: HttpErrorResponse) => {
			alert(`Backend returned code ${err.status} with message: ${err.error}`);
		});
	}

	addCar(newCar: Car) {
    this.carsService.addCar( newCar ).
    subscribe(
      car => {
       this.cars.push(car);
       this.newCar = new Car();
      }
     );
  }


  ngOnInit() {
  }

}
