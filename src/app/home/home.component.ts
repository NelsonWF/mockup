import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	travels: any[] = [
		{
			date: 'Monday 10th 2:28 PM',
			source: 'Houston, TX, 33619',
			destination: 'Atlanta, GA, 30123',
			price: 250.00,
			badge: 1
		},
		{
			date: 'Monday 10th 2:28 PM',
			source: 'Houston, TX, 33619',
			destination: 'Atlanta, GA, 30123',
			price: 270.00,
			badge: 2
		},
		{
			date: 'Monday 10th 2:28 PM',
			source: 'Houston, TX, 33619',
			destination: 'Atlanta, GA, 30123',
			price: 350.00,
			badge: 3
		}
	];
	constructor() { }

	ngOnInit() {
	}

}
