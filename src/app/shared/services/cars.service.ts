import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../model/car-model';


@Injectable()

export class CarsService {

  constructor(private http: HttpClient) { }

  public getCars() {
  	return this.http.get<any[]>('http://localhost:8000/cars.php');
  }

  public addCar(car: Car){
  	return this.http.post('http://localhost:8000/cars-add.php', {
  		mark: car.mark,
  		model: car.model,
  		year: car.year,
  		maxSpeed: car.maxSpeed,
  		isAutomatic: car.isAutomatic,
  		engine: car.engine,
  		numberOfDoors: car.numberOfDoors
  	});
  }

}
