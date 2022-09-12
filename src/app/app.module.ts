import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeComponent } from './ang-assignment/coffee.component';
import { CoffeeReducer } from './ang-assignment/store/coffee.reducer';
import { coffeeEffects } from './ang-assignment/store/coffee.effects';

@NgModule({
  declarations: [
    AppComponent,
	CoffeeComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	StoreModule.forRoot({coffees: CoffeeReducer}),
	EffectsModule.forRoot([coffeeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
