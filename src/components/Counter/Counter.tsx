import React from 'react';
import './Counter.css';

type CounterPropsType = {
	counterValue: number
	minValue: number
	maxValue: number
	increment: () => void
	reset: () => void
	disableBtnReset: boolean
	disableBtnInc: boolean
	message: string
	error: boolean
	errorMessage: boolean
	setLocalStorage: (valueMin: number, valueMax: number) => void

}

const Counter = (props: CounterPropsType) => {
	const increment = () => { props.increment() }
	const reset = () => { props.reset() }

	const minValue = localStorage.getItem('valueMin')
	const maxValue = localStorage.getItem('valueMax')

	if (Number(minValue) && Number(maxValue)) {
		props.setLocalStorage(Number(minValue), Number(maxValue));
	}

	return (
		<div className='counter'>
			<p className={props.counterValue === props.maxValue  ? 'counterValueMax' : 'counterValue'}>
				{ props.error ? props.errorMessage : props.disableBtnInc ? props.message : props.counterValue }
			</p>
			<div className='app__btn-box'>

				{/*<Button title='inc' />*/}
				{/*<Button title='reset' />*/}

				<button className={'button'} onClick={increment}
								disabled={props.counterValue < props.maxValue || props.error ? props.disableBtnInc : !props.disableBtnInc}>INC</button>
				<button className={'button'} onClick={reset} disabled={props.disableBtnReset}>RESET</button>
			</div>
		</div>
	);
}

export default Counter;
