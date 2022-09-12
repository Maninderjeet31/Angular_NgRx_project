import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './ang-assignment/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  	title = 'ang-ngrx-assignment';
	loading$!: Observable<Boolean>;

	constructor( private store: Store<AppState> ) {}

	ngOnInit() {
		this.loading$ = this.store.select(store => store.coffees.loading);
	}
}
