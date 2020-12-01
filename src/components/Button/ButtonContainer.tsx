import React from 'react';
import {connect} from 'react-redux';
import Button from './Button';

const mapStateToProps = (state: any) => {
	return {
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {

	}
}

const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(Button);

export default ButtonContainer;
