let map;
const placesILike = [
    {lat: 41.88182496097524, lon: -87.6274169366692, name: "Goth Target", category: "shopping", description: "Cool-looking Target department store."},
    {lat: 41.88582008646766, lon: -87.62795717858593, name: "State/Lake", category: "trains", description: "I was the *last* person to use the original State/Lake Elevated Station when it closed down in January!"},
    {lat: 41.87867255303839, lon: -87.6403241414351, name: "Chicago Union Station", category: "trains", description: "Great place to catch a train."},
    {lat: 41.88783804921012, lon: -87.63993099797676, name: "Canal Street", category: "trains", description: "This is a nice place to watch trains coming in and out of Chicago Union Station!"}
];
async function initMap() {
    const [{ Map }, { Marker }] = await Promise.all([
        google.maps.importLibrary('maps'),
        google.maps.importLibrary('marker'),
    ]);
    map = new Map(document.getElementById('map'), {
        center: { lat: 41.886323, lng: -87.677778},
        zoom: 12,
    });
    placesILike.forEach((place) => {
        console.log("adding " + place.name);
        const mark = new Marker({
            map: map,
            position: {lat: place.lat, lng: place.lon},
            title: place.name,
            // icon: {
            //     path: google.maps.SymbolPath.CIRCLE,
            //     fillColor: "#FF0000",
            //     fillOpacity: 1,
            //     strokeWeight: 2,
            //     scale: 10
            // }
        });
        mark.addListener("click", () => {
            alert(`This is ${place.name}: ${place.description}`);
        })
    })
}

initMap();