
function initMap() {
  var usaHome = {lat: 39.977120098439634, lng: -96.6357421875};
  var map = map;
  var mapProperties = {
    center: new google.maps.LatLng(usaHome),
     zoom: 3
  };
  map = new google.maps.Map(document.getElementById('div-rep-locator'), mapProperties);

  var markers = data.markers;



  $.each(data.markers, function(key, data) {
    var latLng = new google.maps.LatLng(data.location[0], data.location[1]);

    var contentString = '<div id="div-data" class="div-data">'
                            + '<strong>' +  data.name + '<br />' +  data.name2 + '</strong>'
                            + '<div><span class="span-data">' +  data.company + '</span></div>'
                            + '<div><span class="span-data">' +  data.phone + '</span></div>'
                            + '<div><span class="span-data">' +  data.phone2 + '</span></div>'
                            + '<div><a class="dataEmail" href="mailto:'+  data.email +'">' +  data.email + '</a></div>'
                            + '<div><a class="dataEmail" href="mailto:'+  data.email2 +'">' +  data.email2 + '</a></div>'
                        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  });
}
