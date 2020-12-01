import React from 'react';
import {connect} from 'react-redux';
import Counter from './Counter';
import {IncrementAC, ResetAC, setLocalStorageAC} from '../../redux/counterReducer';


// type mapStateToPropsType = {
// 	counterValue: number
// 	minValue: number
// 	maxValue: number
// 	disableBtnReset: boolean
// 	disableBtnInc: boolean
// 	error: boolean
// 	message: string
// 	errorMessage: string
// }

const mapStateToProps = (state: any) => {
	return {
		counterValue: state.counter.counterValue,
		minValue: state.counter.minValue,
		maxValue: state.counter.maxValue,
		disableBtnReset: state.counter.disableBtnReset,
		disableBtnInc: state.counter.disableBtnInc,
		error: state.counter.error,
		message: state.counter.message,
		errorMessage: state.counter.errorMessage
	}
}


const mapDispatchToProps = (dispatch: any) => {
	return {
		increment: () => {
			dispatch(IncrementAC())
		},
		reset: () => {
			dispatch(ResetAC())
		},
		setLocalStorage: (valueMin: number, valueMax: number) => {
			dispatch(setLocalStorageAC(valueMin, valueMax))
		}
	}
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterContainer;