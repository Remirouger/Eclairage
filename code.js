document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
      var map = L.map('map').setView([48.855221, 2.346073], 13);

      L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL'
      }).addTo(map);

       // Instantiation de différentes couches provenant de GeoServer
       var couche = L.tileLayer.wms("http://localhost:4000/geoserver/eclairage/wms?", {
           layers: 'eclairage:lampadaire',
           format: 'image/png',
           transparent: true,
           opacity : 0.5
       });
       couche.addTo(map);
    }
}
