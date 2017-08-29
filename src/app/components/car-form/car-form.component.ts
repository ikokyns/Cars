import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../shared/services/cars.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html'
})
export class CarFormComponent implements OnInit {

	private car: any = {};
  private selectYears: any = [];

  constructor(private route:ActivatedRoute, private carService: CarsService) { }

  getCarYears(){
    for(let i=1990; i<2017; i++){
      this.selectYears.push(i);
    }
  }

  ngOnInit() {
  	this.route.params.subscribe(()=> {
		  let id = parseInt(this.route.snapshot.paramMap.get('id'));
		this.carService.getCars().subscribe((data: any[]) => {this.car = data.find(item => item['id'] == id)});
	});
  }

}
