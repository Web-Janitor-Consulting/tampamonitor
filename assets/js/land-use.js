mapboxgl.accessToken = 'pk.eyJ1IjoibWlrbGIiLCJhIjoiY2xkeHpjbnM0MGx6ajNvcDczM3poMmF4NiJ9.LEHFbNuBQCkqJ2m1sniQKA';
const map = new mapboxgl.Map({
    container: 'map', // container id
    style: `mapbox://styles/miklb/cl9llj1he000014mzuqy5q2kk`, // style URL
    center: [-82.4572, 27.9506], // starting position [lng, lat]
    zoom: 11.5, // starting zoom
    pitch: 35,
    bearing: -7.5,
});


map.on('load', function() {
    map.addSource('current-zoning', {
        type: 'vector',
        url: 'mapbox://miklb.2m3kkh2c'
    });
    map.addLayer({
            'id': 'current-zoning',
            'type': 'fill',
            'source': 'current-zoning',
            "source-layer": "Zoning_District-12-23-d0x6f8",
            'layout': {
                'visibility': 'visible'
            },
            "paint": {
                "fill-color": [
                    "match", ["get", "ZONECLASS"],
                    ["A"],
                    "#006d2c", ["CN"],
                    "#ffeda0", ["CI"],
                    "#f03b20", ["CG"],
                    "#feb24c", ["IG"],
                    "#bdbdbd", ["IH"],
                    "#636363", ["M-AP-1"],
                    "#f1eef6", ["M-AP-2"],
                    "#bdc9e1", ["M-AP-3"],
                    "#74a9cf", ["M-AP-4"],
                    "#2b8cbe", ["UC"],
                    "#045a8d", ["RO"],
                    "#f0f9e8", ["RO-1"],
                    "#bae4bc", ["OP"],
                    "#7bccc4", ["OP-1"],
                    "#2b8cbe", ["RM-12"],
                    "#ede5cf", ["RM-24"],
                    "#d39c83", ["RM-16"],
                    "#e0c2a2", ["RM-24/18", "RM-18"],
                    "hsl(5, 40%, 60%)", ["RM-35"],
                    "#a65461", ["RM-50"],
                    "hsl(337, 40%, 36%)", ["RM-75"],
                    "#541f3f", ["RS-50"],
                    "#ecda9a", ["RS-60"],
                    "#efc47e", ["RS-75"],
                    "#f3ad6a", ["RS-100"],
                    "#f7945d", ["RS-150"],
                    "#f97b57", ["YC-1"],
                    "#fde0c5", ["YC-2"],
                    "#facba6", ["YC-3"],
                    "#f8b58b", ["YC-4"],
                    "#f59e72", ["YC-5"],
                    "#f2855d", ["YC-6"],
                    "#ef6a4c", ["YC-7"],
                    "#eb4a40", ["YC-8"],
                    "hsl(4, 74%, 53%)", ["YC-9"],
                    "#8e3029", ["CD-1"],
                    "#ffffd4", ["CD-3"],
                    "#fe9929", ["CBD-1"],
                    "#d95f0e", ["CBD-2"],
                    "#993404", ["PD"],
                    "#fef6b5", ["PD-A"],
                    "#ffdd9a", ["CU"],
                    "#ffc285", ["CD-2"],
                    "#fed98e", ["SH-RS"],
                    "#fbe6c5", ["SH-RS-A"],
                    "#f5ba98", ["SH-RM"],
                    "#ee8a82", ["SH-RO"],
                    "#dc7176", ["SH-CN"],
                    "#c8586c", ["SH-CI"],
                    "#9c3f5d", ["SH-PD"],
                    "#70284a",
                    "hsl(220, 3%, 99%)"
                ]
            },
            metadata: {
                name: 'Current Zoning'
            }
        },
        'landuse'
    );
    map.addSource('future-land-use', {
        type: 'vector',
        url: 'mapbox://miklb.96dmhql3'
    });
    map.addLayer({
            'id': 'future-land-use',
            'type': 'fill',
            'source': 'future-land-use',
            'source-layer': 'TPA_FLU_Shapefiles-74qg0b',
            'layout': {
                'visibility': 'visible'
            },
            "paint": {
                "fill-color": [
                    "match", ["get", "UNIQ_VAL"],
                    ["TAMPA_CC-35"],
                    "hsl(0, 100%, 50%)", ["TAMPA_CMU-35"],
                    "hsl(316, 66%, 82%)", ["TAMPA_ESA"],
                    "hsl(155, 100%, 84%)", ["TAMPA_GMU-24"],
                    "hsl(266, 100%, 92%)", ["TAMPA_HI"],
                    "hsl(0, 0%, 31%)", ["TAMPA_LI"],
                    "hsl(0, 0%, 61%)", ["TAMPA_MACDILL AFB"],
                    "hsl(207, 74%, 65%)", ["TAMPA_R-10"],
                    "hsl(27, 100%, 71%)", ["TAMPA_CBD"],
                    "hsl(0, 100%, 24%)", ["TAMPA_M-AP"],
                    "hsl(0, 0%, 82%)", ["TAMPA_NMU-35"],
                    "hsl(0, 86%, 72%)", ["TAMPA_P/QP"],
                    "hsl(207, 74%, 65%)", ["TAMPA_R/OS"],
                    "hsl(97, 42%, 73%)", ["TAMPA_R-20"],
                    "hsl(41, 37%, 44%)", ["TAMPA_R-3"],
                    "hsl(60, 100%, 50%)", ["TAMPA_R-35"],
                    "hsl(34, 100%, 29%)", ["TAMPA_R-50"],
                    "hsl(18, 100%, 25%)", ["TAMPA_R-6"],
                    "hsl(55, 100%, 50%)", ["TAMPA_R-83"],
                    "hsl(24, 93%, 16%)", ["TAMPA_RE-10"],
                    "hsl(85, 100%, 79%)", ["TAMPA_RMU-100"],
                    "hsl(333, 48%, 49%)", ["TAMPA_SMU-3"],
                    "hsl(314, 100%, 50%)", ["TAMPA_SMU-6"],
                    "hsl(330, 100%, 87%)", ["TAMPA_TU-24"],
                    "hsl(0, 51%, 60%)", ["TAMPA_UMU-60"],
                    "hsl(279, 100%, 87%)",
                    "#000000"
                ]
            },
            metadata: {
                name: 'Future Land Use',
                labels: {
                    'TAMPA_CC-35': 'CC-35',
                }
            }
        },
        'landuse'
    );
});
// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
    // If these two layers were not added to the map, abort
    if (!map.getLayer('current-zoning') || !map.getLayer('future-land-use')) {
        return;
    }
    // get visible layers
    function getVisibleLayers() {
        var layers = map.getStyle().layers;
        var visibleLayers = [];
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].layout && layers[i].layout.visibility === 'visible') {
                visibleLayers.push(layers[i].id);
            }
        }
        return visibleLayers;
    }

    //
    viz = getVisibleLayers();
    console.log(viz);



    map.on('click', viz, (e) => {
        if (viz.hasOwnProperty(0)) {
            htmlFLU = "Future: " + e.features[0].properties.UNIQ_VAL + "<br/>";
        }
        if (viz.hasOwnProperty(1)) {
            htmlCZ = "Current: " + e.features[1].properties.ZONECLASS;
        }
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(htmlFLU + htmlCZ)
            .addTo(map);
    });

});


// Change the cursor to a pointer when
// the mouse is over the states layer.
map.on('mouseenter', 'current-zoning', () => {
    map.getCanvas().style.cursor = 'pointer';
});

// Change the cursor back to a pointer
// when it leaves the states layer.
map.on('mouseleave', 'current-zoning', () => {
    map.getCanvas().style.cursor = '';
});

map.addControl(new mapboxgl.NavigationControl(), 'top-right');
const legend = new LegendControl({
    // Show all properties in selected layers
    layers: ['current-zoning', 'future-land-use'],
    collapsed: true,
    toggler: true
});
map.addControl(legend, 'bottom-left');

// Add the control to the map.
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    flyTo: {
        bearing: 0,
        // Control the flight curve, making it move slowly and
        // zoom out almost completely before starting to pan.
        speed: 1.1, // Make the flying slow.
        curve: 2, // Change the speed at which it zooms out.
        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: function(t) {
            return t;
        }
    },
    mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));