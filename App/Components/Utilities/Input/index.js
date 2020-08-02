import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
//styles
import { styles } from './styles';

/*
* This elementTypes are the types of icon component that you will use.
*  You can to use a component personalized or Icon component
*  For you need for use the icon component is the type and name params
*/

let elementTypes = {
	icon: (props, side) => {
		const { [side]: { type, name, styleIcon } } = props;
		let style = {
			...styles.icon,
			...styleIcon
		};
		return <Icon style={style} type={type} name={name} />;
	},
	component: (props, side) => {
		return props[side].component();
	}
};

/**
 * 
 * @param  props The params of the parent component props. 
 */

const Input = (props) => {
	const { iconLeft, iconRight } = props;

	props = {
		...props,
		style: {
			...styles.input,
			...props.style,
			
		}
	};

	

	return (
		<View style={{...styles.inputContainer, ...props.styleContainer}}>
			{iconLeft && elementTypes[iconLeft.elementType](props, 'iconLeft')}
			<TextInput {...props} />
			{iconRight && elementTypes[iconRight.elementType](props, 'iconRight')}
		</View>
	);
};

Input.defaultProps = {
	style: {},
	elementType: null,
	iconPos: 'left'
};

/** 
* Params for the input component
* @param style for the style input component
* @param onChange: Function for update the input text.
* @param iconLeft: the object for the icon {name, type, styleIcon}.
* @param iconRight: the object for the icon {name, type, styleIcon}.
*/

Input.propTypes = {
	style: PropTypes.object,
	onChange: PropTypes.func,
	iconLeft: PropTypes.object,
	iconRight: PropTypes.object
};

export default Input;
