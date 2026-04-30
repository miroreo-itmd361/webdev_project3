let map;
async function initMap() {
    const { Map, RenderingType } = (await google.maps.importLibrary('maps'));
    map = new Map(document.getElementById('map'), {
        center: { lat: 41.886323, lng: -87.677778},
        zoom: 12,
        renderingType: RenderingType.VECTOR,
    });
}

initMap();