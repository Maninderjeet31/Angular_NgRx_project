import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';


import { CoffeeService } from './coffee.service';
import { Coffee } from './coffee.model';
import { AppState } from './app-state.model';
import { GetCoffee } from './store/coffee.actions';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

	coffees$!: Observable<Coffee[]>;
	loading$!: Observable<Boolean>;
	error$!: Observable<Error>;
	
	constructor(
		private coffeeService: CoffeeService,
		private store: Store<AppState>
	 ) {
	}

	ngOnInit() {
		this.coffeeService.getCoffee().subscribe(
			value1 => console.log(value1)
		)

		this.coffeeService.getCoffeeList().subscribe(
			value2 => console.log(value2)
		)
		
		this.coffees$ = this.store.select(store => store.coffees.coffees);
		this.loading$ = this.store.select(store => store.coffees.loading);
		// this.error$ = this.store.select(store => store.coffees.error);

		this.store.dispatch(new GetCoffee());
		
		
	}

}
