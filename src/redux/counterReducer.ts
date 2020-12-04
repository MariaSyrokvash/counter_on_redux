import {ActionsType} from './actionCreators';

const INCREMENT = 'INCREMENT'
const RESET = 'RESET'
const SET_MIN_VALUE = 'SET_MIN_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_MIN_VALUE_TO_COUNTER = 'SET_MIN_VALUE_TO_COUNTER'
const SET_DISABLE_INC_RESET = 'SET_DISABLE_INC_RESET'
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'
const SET_ERROR = 'SET_ERROR'
const SET_MESSAGE = 'SET_MESSAGE'

export const IncrementAC = () => ({ type: INCREMENT } as const)
export const ResetAC = () => ({ type: RESET } as const)
export const SetMinValueAC = (valueMin: number, disableBtnSet: boolean, disableBtnInc: boolean, disableBtnReset: boolean) => ({ type: SET_MIN_VALUE, valueMin, disableBtnSet, disableBtnInc, disableBtnReset } as const)
export const SetMaxValueAC = (valueMax: number, disableBtnSet: boolean,  disableBtnInc: boolean, disableBtnReset: boolean) => ({ type: SET_MAX_VALUE, valueMax, disableBtnSet, disableBtnInc, disableBtnReset } as const)
export const SetMinValueToCounterAC = (valueMin: number,  disableBtnSet: boolean, disableBtnInc: boolean, disableBtnReset: boolean ) => ({ type: SET_MIN_VALUE_TO_COUNTER,  valueMin, disableBtnSet, disableBtnInc, disableBtnReset} as const)
export const DisabledIncResetAC = (disableBtnInc: boolean, disableBtnReset: boolean) => ({ type: SET_DISABLE_INC_RESET, disableBtnInc, disableBtnReset} as const)
export const setErrorMessageAC = (errorMessage: string) => ({ type: SET_ERROR_MESSAGE, errorMessage } as const)
export const setErrorAC = (error: boolean, disableBtnSet: boolean) => ({ type: SET_ERROR, error, disableBtnSet } as const)
export const setMessageAC = (message: string) => ({ type: SET_MESSAGE, message } as const)


// export type initialStateType = {
// 	counterValue: number
// 	minValue: number
// 	maxValue: number
// 	disableBtnSet: boolean
// 	disableBtnReset: boolean
// 	disableBtnInc: boolean
// 	errorMessage: string
// 	message: string
// 	error: boolean
// }

const initialState = {
	counterValue: 0,
	minValue: 0,
	maxValue: 5,
	disableBtnSet: true,
	disableBtnReset: false,
	disableBtnInc: false,
	errorMessage: 'Invalid error!',
	message: '',
	error: false
}

type initialStateType = typeof initialState


console.log(initialState.error)

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				counterValue: state.counterValue + 1
			}
		case RESET:
			return {
				...state,
				counterValue: state.minValue
			}
		case SET_MIN_VALUE:
			return {
				...state,
				minValue: action.valueMin,
				disableBtnSet: action.disableBtnSet,
				disableBtnInc: action.disableBtnInc,
				disableBtnReset: action.disableBtnReset
			}
		case SET_MAX_VALUE:
			return {
				...state,
				maxValue: action.valueMax,
				disableBtnSet: action.disableBtnSet,
				disableBtnInc: action.disableBtnInc,
				disableBtnReset: action.disableBtnReset
			}
		case SET_MIN_VALUE_TO_COUNTER:
			return {
				...state,
				counterValue: action.valueMin,
				disableBtnSet: action.disableBtnSet,
				disableBtnInc: action.disableBtnInc,
				disableBtnReset: action.disableBtnReset
			}
		case SET_DISABLE_INC_RESET:
			return {
				...state,
				disableBtnInc: !action.disableBtnInc,
				disableBtnReset: !action.disableBtnReset
			}
		case SET_MESSAGE:
			return {
				...state,
				message: action.message
			}
		case SET_ERROR_MESSAGE	:
			return {
				...state,
				errorMessage: action.errorMessage,
			}
		case SET_ERROR:
				return {
					...state,
					error: action.error,
					disableBtnSet: action.disableBtnSet,
				}
		default:
			return state
	}
}