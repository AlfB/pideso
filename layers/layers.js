var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Regiones = new ol.format.GeoJSON();
var features_Regiones = format_Regiones.readFeatures(geojson_Regiones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regiones = new ol.source.Vector();
jsonSource_Regiones.addFeatures(features_Regiones);var lyr_Regiones = new ol.layer.Vector({
                source:jsonSource_Regiones, 
                style: style_Regiones,
                title: "Regiones"
            });var format_Edo_Mx = new ol.format.GeoJSON();
var features_Edo_Mx = format_Edo_Mx.readFeatures(geojson_Edo_Mx, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edo_Mx = new ol.source.Vector();
jsonSource_Edo_Mx.addFeatures(features_Edo_Mx);var lyr_Edo_Mx = new ol.layer.Vector({
                source:jsonSource_Edo_Mx, 
                style: style_Edo_Mx,
                title: "Edo_Méx"
            });var format_Localidades = new ol.format.GeoJSON();
var features_Localidades = format_Localidades.readFeatures(geojson_Localidades, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades = new ol.source.Vector();
jsonSource_Localidades.addFeatures(features_Localidades);var lyr_Localidades = new ol.layer.Vector({
                source:jsonSource_Localidades, 
                style: style_Localidades,
                title: "Localidades"
            });var format_Prioritarias = new ol.format.GeoJSON();
var features_Prioritarias = format_Prioritarias.readFeatures(geojson_Prioritarias, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prioritarias = new ol.source.Vector();
jsonSource_Prioritarias.addFeatures(features_Prioritarias);var lyr_Prioritarias = new ol.layer.Vector({
                source:jsonSource_Prioritarias, 
                style: style_Prioritarias,
                title: "Prioritarias"
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_Edo_Mx],
                                title: "Edo_Méx"});

lyr_Regiones.setVisible(true);lyr_Edo_Mx.setVisible(true);lyr_Localidades.setVisible(true);lyr_Prioritarias.setVisible(true);
var layersList = [baseLayer,group_group1,lyr_Localidades,lyr_Prioritarias,lyr_Regiones];
lyr_Regiones.set('fieldAliases', {'GID': 'GID', 'Nombre': 'Nombre', 'Region': 'Region', });
lyr_Edo_Mx.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'ClaveMun': 'ClaveMun', });
lyr_Localidades.set('fieldAliases', {'GID': 'GID', 'Nom_Region': 'Nom_Region', 'Nom_Munici': 'Nom_Munici', 'Nom_Locali': 'Nom_Locali', 'CVE_Loc': 'CVE_Loc', });
lyr_Prioritarias.set('fieldAliases', {'GID': 'GID', 'Nom_Region': 'Nom_Region', 'Municipio': 'Municipio', 'Nom_Locali': 'Nom_Locali', 'CVE_Loc': 'CVE_Loc', });
lyr_Regiones.set('fieldImages', {'GID': 'TextEdit', 'Nombre': 'TextEdit', 'Region': 'TextEdit', });
lyr_Edo_Mx.set('fieldImages', {'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'ClaveMun': 'TextEdit', });
lyr_Localidades.set('fieldImages', {'GID': 'TextEdit', 'Nom_Region': 'TextEdit', 'Nom_Munici': 'TextEdit', 'Nom_Locali': 'TextEdit', 'CVE_Loc': 'TextEdit', });
lyr_Prioritarias.set('fieldImages', {'GID': 'TextEdit', 'Nom_Region': 'TextEdit', 'Municipio': 'TextEdit', 'Nom_Locali': 'TextEdit', 'CVE_Loc': 'TextEdit', });
lyr_Regiones.set('fieldLabels', {'GID': 'inline label', 'Nombre': 'inline label', 'Region': 'inline label', });
lyr_Edo_Mx.set('fieldLabels', {'CVE_ENT': 'inline label', 'CVE_MUN': 'inline label', 'ClaveMun': 'inline label', });
lyr_Localidades.set('fieldLabels', {'GID': 'inline label', 'Nom_Region': 'inline label', 'Nom_Munici': 'inline label', 'Nom_Locali': 'inline label', 'CVE_Loc': 'inline label', });
lyr_Prioritarias.set('fieldLabels', {'GID': 'inline label', 'Nom_Region': 'inline label', 'Municipio': 'inline label', 'Nom_Locali': 'inline label', 'CVE_Loc': 'inline label', });
lyr_Prioritarias.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});