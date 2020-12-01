import {
	DisabledIncResetAC,
	IncrementAC,
	ResetAC, setErrorAC, setErrorMessageAC, setLocalStorageAC,
	SetMaxValueAC, setMessageAC,
	SetMinValueAC,
	SetMinValueToCounterAC
} from './counterReducer';

type IncrementActionType = ReturnType<typeof IncrementAC>
type ResetActionType = ReturnType<typeof ResetAC>
type SetMinValueType = ReturnType<typeof SetMinValueAC>
type SetMaxValueType = ReturnType<typeof SetMaxValueAC>
type SetMaxValueToCounterType = ReturnType<typeof SetMinValueToCounterAC>
type DisabledIncResetType = ReturnType<typeof DisabledIncResetAC>
type setErrorMessageType = ReturnType<typeof setErrorMessageAC>
type setErrorType = ReturnType<typeof setErrorAC>
type setMessageType = ReturnType<typeof setMessageAC>
type setLocalStorageType = ReturnType<typeof setLocalStorageAC>

export type ActionsType =
	IncrementActionType
	| ResetActionType
	| SetMinValueType
	| SetMaxValueType
	| SetMaxValueToCounterType
	| DisabledIncResetType
	| setErrorType
	| setMessageType
	| setErrorMessageType
	| setLocalStorageType
