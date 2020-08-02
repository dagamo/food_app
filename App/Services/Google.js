

const API_KEY = 'AIzaSyB5yyi6Xr5X8Q0UaJfwLQHqFBJsU1FrVPg'
export const buildMapUrl = (latitude, longitude, width, height, zoom, name) => {
	let mapUrl =
		'https://maps.googleapis.com/maps/api/staticmap?' +
		'key=' +
		API_KEY +
		'&' +
		'&center=' +
		latitude +
		',' +
		longitude +
		'&' +
		'&size=' +
		width +
		'x' +
		height +
		'&' +
		'zoom=' +
		zoom +
		'&' +
		`markers=color:red%7C` +
		latitude +
		',' +
		longitude;

	// deb('image url ', url)

	return mapUrl;
};
