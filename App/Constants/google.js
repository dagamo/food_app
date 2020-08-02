export const CUSTOM_MAP_STYLE = [
	{
		featureType: 'administrative.locality',
		elementType: 'labels.text',
		stylers: [ { visibility: 'on' }, { weight: 0.5 } ]
	},
	{ featureType: 'administrative.neighborhood', elementType: 'labels.text', stylers: [ { visibility: 'off' } ] },
	{ featureType: 'landscape', elementType: 'geometry.fill', stylers: [ { color: '#f3f3f3' } ] },
	{
		featureType: 'landscape.man_made',
		elementType: 'geometry.fill',
		stylers: [ { color: '#f0f0e1' }, { visibility: 'on' }, { weight: 1.5 } ]
	},
	{
		featureType: 'landscape.natural.landcover',
		elementType: 'geometry.fill',
		stylers: [ { color: '#ddffdd' }, { visibility: 'on' } ]
	},
	{ featureType: 'landscape.natural.terrain', elementType: 'geometry.fill', stylers: [ { visibility: 'on' } ] },
	{ featureType: 'poi', elementType: 'labels.icon', stylers: [ { color: '#dbdbdb' }, { visibility: 'on' } ] },
	{ featureType: 'poi', elementType: 'labels.text.fill', stylers: [ { color: '#a3aade' } ] },
	{ featureType: 'poi.business', elementType: 'labels.text', stylers: [ { visibility: 'off' } ] },
	{ featureType: 'poi.medical', stylers: [ { visibility: 'on' } ] },
	{ featureType: 'poi.medical', elementType: 'geometry.fill', stylers: [ { visibility: 'off' } ] },
	{ featureType: 'poi.park', elementType: 'geometry.fill', stylers: [ { color: '#8df595' } ] },
	{
		featureType: 'poi.park',
		elementType: 'labels.text',
		stylers: [ { lightness: 40 }, { visibility: 'simplified' } ]
	},
	{ featureType: 'poi.place_of_worship', elementType: 'labels.text', stylers: [ { visibility: 'off' } ] },
	{ featureType: 'poi.place_of_worship', elementType: 'labels.text.fill', stylers: [ { visibility: 'on' } ] },
	{ featureType: 'poi.school', elementType: 'labels.text', stylers: [ { visibility: 'on' } ] },
	{ featureType: 'poi.sports_complex', elementType: 'labels.text', stylers: [ { visibility: 'on' } ] },
	{ featureType: 'road.arterial', elementType: 'labels', stylers: [ { visibility: 'off' } ] },
	{ featureType: 'road.highway', elementType: 'geometry.fill', stylers: [ { color: '#ffffff' } ] },
	{
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [ { color: '#c0c0c0' }, { visibility: 'on' } ]
	},
	{ featureType: 'road.highway', elementType: 'labels', stylers: [ { visibility: 'on' }, { weight: 0.5 } ] },
	{
		featureType: 'road.highway',
		elementType: 'labels.icon',
		stylers: [ { lightness: 45 }, { visibility: 'simplified' } ]
	},
	{ featureType: 'road.highway', elementType: 'labels.text', stylers: [ { color: '#707070' } ] },
	{ featureType: 'road.highway', elementType: 'labels.text.stroke', stylers: [ { visibility: 'off' } ] },
	{ featureType: 'road.local', stylers: [ { visibility: 'off' } ] },
	{
		featureType: 'road.local',
		elementType: 'geometry.fill',
		stylers: [ { color: '#dbdbdb' }, { visibility: 'on' } ]
	},
	{ featureType: 'road.local', elementType: 'labels.text', stylers: [ { visibility: 'on' } ] },
	{ featureType: 'road.local', elementType: 'labels.text.fill', stylers: [ { visibility: 'on' } ] }
];
