import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counterReducer';


export type AppStateType = ReturnType<typeof reducers>

const reducers: any = combineReducers({
	counter: counterReducer
});


export const store: AppStateType = createStore(reducers)