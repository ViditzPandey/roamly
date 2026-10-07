let mapToken = mapToken;
console.log(mapToken);
const map = new mapboxgl.Map({
    accessToken: mapToken,
    container: 'map',
    center: [-71.06776, 42.35816],
    zoom: 9
});