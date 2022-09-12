import { Coffee } from "../coffee.model";
import { CoffeeActionTypes, CoffeeAction } from "./coffee.actions";

export interface State {
    coffees: Coffee[],
    loading: boolean,
    error: string
}

const initialState: State = {
	coffees: [
		{
			"id":5024,
			"uid":"d8f2e4e0-b025-4aa2-b05a-775aa1751b5e",
			"blend_name":"Joe Treat",
			"origin":"Mount Elgon, Uganda",
			"variety":"SL34",
			"notes":"crisp, big, honeydew, butter, smokey",
			"intensifier":"juicy"
		},
		{
			"id":9022,
			"uid":"4d248bd7-707b-4779-8cd9-7305467c7240",
			"blend_name":"Holiday Breaker",
			"origin":"Jinotega, Nicaragua",
			"variety":"S288",
			"notes":"mild, juicy, grassy, lemon verbena, hops",
			"intensifier":"crisp"
		}
	],
	loading: false,
	error: ''
}

export function CoffeeReducer (state = initialState, action: CoffeeAction) {
	switch(action.type) {
		case CoffeeActionTypes.GET_COFFEE:
			return {
				...state,
				loading: true
			}
		
		case CoffeeActionTypes.GET_COFFEE_SUCCESS:
			return {
				...state,
				coffees: action.payload,
            	loading: false
			}	

		case CoffeeActionTypes.GET_COFFEE_FAIL:
			return {
				...state,
				error: action.payload,
            	loading: false
			}

		default: 
			return state;
	}
}