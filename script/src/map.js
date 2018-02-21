var $ = global.jQuery;

module.exports = Map;

function Map(opts) {
  if (!(this instanceof Map)) {
    return new Map(opts);
  }

  console.log('Map initialized.');

  // Script goes here
  window.initMap = function() {

    // Map style

    var styledMapType = new google.maps.StyledMapType(
      [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f5f5"
          }]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#f5f5f5"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#bdbdbd"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#eeeeee"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e5e5e5"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dadada"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e5e5e5"
          }]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#eeeeee"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#c9c9c9"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        }
      ], {
        name: 'Terra Firma'
      }
    );


    // Bangalore Map

    var bangalore = {
      lat: 12.929395,
      lng: 77.625519
    };

    var bangaloreMap = new google.maps.Map(document.getElementById('bangalore'), {
      center: bangalore,
      zoom: 16,
      mapTypeControl: false
    });

    var marker = new google.maps.Marker({
      position: bangalore,
      map: bangaloreMap
    });

    bangaloreMap.mapTypes.set('styled_map', styledMapType);
    bangaloreMap.setMapTypeId('styled_map');


    // Chennai Map

    var chennai = {
      lat: 12.929395,
      lng: 77.625519
    };

    var chennaiMap = new google.maps.Map(document.getElementById('chennai'), {
      center: chennai,
      zoom: 16,
      mapTypeControl: false
    });

    var marker = new google.maps.Marker({
      position: chennai,
      map: chennaiMap
    });

    chennaiMap.mapTypes.set('styled_map', styledMapType);
    chennaiMap.setMapTypeId('styled_map');

  }

}
