const mapboxAccessToken = "pk.eyJ1IjoiaGFpdGhhbWFtaXJlaCIsImEiOiJjbHB6OWZucGoxYnpwMm5sdzI5cWxyN2RyIn0.imqctrppyxa2lGKuPeZP8g"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })


function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: mapboxAccessToken,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPosition,
    zoom: 15
  });
  const navControls = new mapboxgl.NavigationControl();
  map.addControl(navControls, 'top-left');

  const mapDirections = new MapboxDirections({
    accessToken: mapboxAccessToken
  })
  map.addControl(mapDirections, 'top-right')



}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])

}
function errorLocation() {
  setupMap([-2, 24, 53.48])
}


