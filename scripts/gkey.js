
function initMap() {
  var usaHome = {lat: 34.1341115, lng: -118.00557800000001};
  var map = new google.maps.Map(document.getElementById('div-rep-locator'), {
    zoom: 4,
    center: usaHome
  });
  var marker = new google.maps.Marker({
    position: usaHome,
    map: map
  });
}