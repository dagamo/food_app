import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
//styles
import { styles } from './styles';

/**
 * This component is for display a list item with two icons 
 * @param {*} props 
 */

const ListItem = (props) => {
	props = {
		...props,
		style: {
			...styles.itemContainer,
			...props.style
		},
		textStyle: {
			...styles.title,
			...props.textStyle
		},
		styleLeftIcon: {
			...styles.icon,
			...props.styleLeftIcon
		},
		styleRightIcon: {
			...styles.iconRight,
			...props.styleLeftIcon
		}
	};

	const { title, iconLeft, iconRight, left, right, styleLeftIcon, styleRightIcon, textStyle, id } = props;

	return (
		<View {...props}>
			<View style={styles.partLeft}>
				{left ? left() : iconLeft && <Icon type={iconLeft.type} name={iconLeft.name} style={styleLeftIcon} />}
				<Text style={textStyle}>{title}</Text>
			</View>
			{right ? right() : iconRight && <Icon type={iconRight.type} name={iconRight.name} style={styleRightIcon} onPress={()=>{
       props.onPress && props.onPress(id)
      }} />}
		</View>
	);
};

/**
 * @param {string} title Is the title of the item.
 * @param {Object}  left Is the information object for the Icon
 * @param {Object}  right Is the information object of the right ICon.
 * @param {ChildNode}  iconLeft and iconRight Is the icon component personalized
 */

ListItem.defaultProps = {
	iconRight: {
		type: 'Feather',
		name: 'chevron-right'
	}
};

ListItem.propTypes = {
	title: PropTypes.string.isRequired,
	left: PropTypes.func,
	right: PropTypes.func,
	iconLeft: PropTypes.any,
  iconRight: PropTypes.any,
  id:PropTypes.string
};

export default ListItem;
