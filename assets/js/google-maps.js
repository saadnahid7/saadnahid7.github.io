function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 24.005933702006168, lng: 89.24280507288165};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}