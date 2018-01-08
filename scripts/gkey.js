
function initMap() {
  var usaHome = {lat: 34.1341115, lng: -118.00557800000001};
  var map = map;
  var mapProperties = {
    center: new google.maps.LatLng(usaHome),
     zoom: 4
  };
  map = new google.maps.Map(document.getElementById('div-rep-locator'), mapProperties);

  var markers = data.markers;

  $.each(data.markers, function(key, data){
    var latLng = new google.maps.LatLng(data.location[0], data.location[1]);

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        //icon: icon,
        title: data.name
    });
  });
}
