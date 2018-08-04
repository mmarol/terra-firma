var $ = global.jQuery;

module.exports = Map;

function Map(opts) {
  if (!(this instanceof Map)) {
    return new Map(opts);
  }

  console.log('Map initialized.');


  // function getCoordinates(mapID) {
  //   var url = $('#' + mapID).data('mapurl');
  //   console.log(url);
  //   var regex = new RegExp('@(.*),(.*),');
  //   var lon_lat_match = url.match(regex);
  //   var lon = lon_lat_match[1];
  //   var lat = lon_lat_match[2];
  //
  //   return [lon, lat];
  // }

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

    // This isn't working because the URL has the wrong coordinates for some reason
    // var bangalore = {
    //   lat: parseFloat(getCoordinates('bangalore')[0]),
    //   lng: parseFloat(getCoordinates('bangalore')[1])
    // };

    // Manually pulling coordinates until I figure out how to get the correct coordinates from the URL
    var bangalore = {
      lat: 12.929113,
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
      lat: 12.9794466,
      lng: 80.2209492
    };

    var chennaiMap = new google.maps.Map(document.getElementById('chennai'), {
      center: chennai,
      zoom: 17,
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
