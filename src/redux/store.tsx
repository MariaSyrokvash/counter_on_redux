import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counterReducer';


function saveToLocalStorage<AppStateType>(state: AppStateType) {
	try {
		const serialisedState = JSON.stringify(state);
		localStorage.setItem("persistantState", serialisedState);
	} catch (e) {
		console.warn(e);
	}
}

function loadFromLocalStorage() {
	try {
		const serialisedState = localStorage.getItem("persistantState");
		if (serialisedState === null) return undefined;
		return JSON.parse(serialisedState);
	} catch (e) {
		console.warn(e);
		return undefined;
	}
}


export type AppStateType = ReturnType<typeof reducers>


const reducers: any = combineReducers({
	counter: counterReducer
});

export const store: AppStateType = createStore(reducers, loadFromLocalStorage())

store.subscribe(() => saveToLocalStorage(store.getState()));