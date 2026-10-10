const map = new mapboxgl.Map({
    accessToken: mapToken,
    container: 'map',
    center: coordinates,
    zoom: 10
});

// console.log(coordinates);

const marker = new mapboxgl.Marker({ color: "red" }).setLngLat(coordinates).setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML("<p>Exact Location will be provided after booking</p>")).addTo(map);