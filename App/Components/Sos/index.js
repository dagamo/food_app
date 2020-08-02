import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';
import { styles } from './styles';
import { wp, hp } from 'App/Services/Responsive';
import { Colors } from 'App/Theme/index';
//assets
import CallIcon from 'App/Assets/Icons/call.png';
import EmergencyIcon from 'App/Assets/Icons/emergency1.png';
import ProtectIcon from 'App/Assets/Icons/protect.png';
import AlarmIcon from 'App/Assets/Icons/alarm.png';

/**
 * This is the SOS component
 * @param {*} props Is the parent props.
 * 
 */
const Sos = (props) => {
	let isIncreased = true;
	const [ start, setStart ] = useState(false);
	const isAnimated = new Animated.Value(1);
	const translateParent = new Animated.Value(0);
	const rotateParent = new Animated.Value(0);
	const size = new Animated.Value(wp(35));
	const containerSize = new Animated.Value(wp(35));
	const opacity = new Animated.Value(0);
	const translateW1 = new Animated.Value(0);
	const translateW2 = new Animated.Value(0);
	const opacityW1 = new Animated.Value(1);
	const opacityW2 = new Animated.Value(0);
	const opacityW3 = new Animated.Value(0);
	const translateW3 = new Animated.Value(0);

	useEffect(() => {
		textAnimation();
	}, []);

	const animationSos = () =>
		Animated.loop(
			Animated.sequence([
				Animated.timing(size, {
					toValue: wp(37),
					duration: 800,
					useNativeDriver: false
				}),
				Animated.timing(size, {
					toValue: wp(35),
					duration: 800,
					useNativeDriver: false
				})
			])
		).start();

	const textAnimation = () =>
		Animated.loop(
			Animated.sequence([
				Animated.delay(3000),
				Animated.parallel([
					Animated.timing(opacityW3, {
						toValue: 0,
						useNativeDriver: false
					}),
					Animated.timing(translateW1, {
						toValue: -20,
						duration: 400,
						useNativeDriver: false
					}),
					Animated.timing(opacityW1, {
						toValue: 0,
						duration: 400,
						useNativeDriver: false
					}),
					Animated.timing(opacityW2, {
						toValue: 1,
						duration: 400,
						useNativeDriver: false
					})
				]),
				Animated.delay(3000),
				Animated.parallel([
					Animated.timing(opacityW3, {
						toValue: 1,
						duration: 400,
						useNativeDriver: false
					}),
					Animated.timing(translateW2, {
						toValue: -20,
						duration: 400,
						useNativeDriver: false
					}),
					Animated.timing(opacityW2, {
						toValue: 0,
						duration: 400,
						useNativeDriver: false
					})
				])
			])
		).start();

	const animatedRadar = (value) =>
		Animated.spring(size, {
			toValue: wp(value),
			duration: 40,
			useNativeDriver: false
		});

	const isAnimation = (value) =>
		Animated.timing(isAnimated, {
			toValue: value,
			duration: 200,
			useNativeDriver: false
		});
	const translateParentY = (value) =>
		Animated.spring(translateParent, {
			toValue: value,
			duration: 40,
			useNativeDriver: false
		});
	const animateParent = (value) =>
		Animated.spring(containerSize, {
			toValue: wp(value),
			duration: 40,
			useNativeDriver: false
		});

	const opacityAnimated = (value) =>
		Animated.timing(opacity, {
			toValue: value,
			duration: 400,
			useNativeDriver: false
		});

	const parallelAnimation = (value, parentValue, opacity, isAnimated, parent) => {
		Animated.parallel([
			translateParentY(parent),
			isAnimation(isAnimated),
			animatedRadar(value),
			animateParent(parentValue),
			opacityAnimated(opacity)
		]).start();
	};

	const onHandleClick = async () => {
		if (isIncreased) {
			parallelAnimation(23, 57, 1, 0, -50);
			isIncreased = false;
		} else {
			parallelAnimation(35, 35, 0, 1, 0);
			isIncreased = true;
		}
	};

	const handleCircleClick = (item) => {
		props.circleClick && props.circleClick(item)
	};

	const newStyle = {
		...styles.Sos,
		width: size,
		height: size,
		borderRadius: wp(20)
	};

	const parentStyle = {
		...styles.container,
		width: containerSize,
		height: containerSize,
		transform: [ { rotate: '-45deg' } ]
	};
	const styleTransale = {
		transform: [ { translateY: translateParent } ]
	};
	let itemStyle1 = {
		...styles.circle,
		backgroundColor: Colors.lightBlue,
		top: 0,
		right: 0,
		opacity
	};

	let itemStyle2 = {
		...styles.circle,
		backgroundColor: Colors.purple10,
		top: 0,
		left: 0,
		opacity
	};

	let itemStyle3 = {
		...styles.circle,
		backgroundColor: Colors.orange10,
		bottom: 0,
		left: 0,
		opacity
	};

	let itemStyle4 = {
		...styles.circle,
		backgroundColor: Colors.green10,
		bottom: 0,
		right: 0,
		opacity
	};

	let styleTapText1 = {
		...styles.tapText,
		opacity: opacityW1,
		transform: [ { translateY: translateW1 } ]
	};
	let styleTapText2 = {
		...styles.tapText,
		opacity: opacityW2,
		transform: [ { translateY: translateW2 } ]
	};
	let styleTapText3 = {
		...styles.tapText,
		opacity: opacityW3,
		transform: [ { translateY: translateW3 } ]
	};

	return (
		<View style={{ alignItems: 'center' }}>
			<Animated.View style={{ ...styles.helpText, opacity: isAnimated }}>
				<Animated.Text style={styleTapText1}>En que podemos ayudarte</Animated.Text>
				<Animated.Text style={styleTapText2}>Pulsa el boton</Animated.Text>
				<Animated.Text style={styleTapText3}>En que podemos ayudarte</Animated.Text>
			</Animated.View>
			<Animated.View style={styleTransale}>
				<Animated.View style={parentStyle}>
					<Animated.View style={itemStyle1}>
						<TouchableOpacity style={styles.circleButton} onPress={() => handleCircleClick(0)}>
							<Image source={CallIcon} />
						</TouchableOpacity>
					</Animated.View>
					<Animated.View style={itemStyle2}>
						<TouchableOpacity style={styles.circleButton} onPress={() => handleCircleClick(1)}>
							<Image source={AlarmIcon} />
						</TouchableOpacity>
					</Animated.View>
					<Animated.View style={itemStyle3}>
						<TouchableOpacity style={styles.circleButton} onPress={() => handleCircleClick(2)}>
							<Image source={ProtectIcon} />
						</TouchableOpacity>
					</Animated.View>
					<Animated.View style={itemStyle4}>
						<TouchableOpacity style={styles.circleButton} onPress={() => handleCircleClick(3)}>
							<Image source={EmergencyIcon} />
						</TouchableOpacity>
					</Animated.View>
					<Animated.View style={newStyle}>
						<TouchableOpacity onPress={onHandleClick} {...props.sosProps}>
							<Text style={styles.sosText}>SOS</Text>
						</TouchableOpacity>
					</Animated.View>
				</Animated.View>
			</Animated.View>
		</View>
	);
};

Sos.defaultProps = {
	circleClick: () => {}
};

Sos.propTypes = {
	sosProps: PropTypes.object,
	circleClick: PropTypes.func
};

export default Sos;
