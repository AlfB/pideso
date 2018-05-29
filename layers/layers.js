var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': 'Mapas Base',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Municipios_0 = new ol.format.GeoJSON();
var features_Municipios_0 = format_Municipios_0.readFeatures(json_Municipios_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipios_0.addFeatures(features_Municipios_0);var lyr_Municipios_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_0, 
                style: style_Municipios_0,
                title: '<img src="styles/legend/Municipios_0.png" /> Estado de México'
            });var format_MunReg_3_1 = new ol.format.GeoJSON();
var features_MunReg_3_1 = format_MunReg_3_1.readFeatures(json_MunReg_3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunReg_3_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MunReg_3_1.addFeatures(features_MunReg_3_1);var lyr_MunReg_3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunReg_3_1, 
                style: style_MunReg_3_1,
    title: 'Regiones<br />\
    <img src="styles/legend/MunReg_3_1_0.png" /> Atlacomulco<br />\
    <img src="styles/legend/MunReg_3_1_1.png" /> Ixtapan<br />\
    <img src="styles/legend/MunReg_3_1_2.png" /> Ixtlahuaca<br />\
    <img src="styles/legend/MunReg_3_1_3.png" /> Lerma<br />\
    <img src="styles/legend/MunReg_3_1_4.png" /> Metepec<br />\
    <img src="styles/legend/MunReg_3_1_5.png" /> Tejupilco<br />\
    <img src="styles/legend/MunReg_3_1_6.png" /> Tepozotlán<br />\
    <img src="styles/legend/MunReg_3_1_7.png" /> Toluca<br />\
    <img src="styles/legend/MunReg_3_1_8.png" /> Valle de Bravo<br />'
        });var format_localidades_edomex_3_2 = new ol.format.GeoJSON();
var features_localidades_edomex_3_2 = format_localidades_edomex_3_2.readFeatures(json_localidades_edomex_3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localidades_edomex_3_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_localidades_edomex_3_2.addFeatures(features_localidades_edomex_3_2);var lyr_localidades_edomex_3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_localidades_edomex_3_2, 
                style: style_localidades_edomex_3_2,
                title: '<img src="styles/legend/localidades_edomex_3_2.png" /> Localidades'
            });var format_Prioritarias_3 = new ol.format.GeoJSON();
var features_Prioritarias_3 = format_Prioritarias_3.readFeatures(json_Prioritarias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prioritarias_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Prioritarias_3.addFeatures(features_Prioritarias_3);var lyr_Prioritarias_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prioritarias_3, 
                style: style_Prioritarias_3,
                title: '<img src="styles/legend/Prioritarias_3.png" /> Prioritarias'
            });
			
			var group_group1 = new ol.layer.Group({
                                layers: [lyr_Municipios_0],
                                title: "Estado"});
			
lyr_Municipios_0.setVisible(true);lyr_MunReg_3_1.setVisible(true);lyr_localidades_edomex_3_2.setVisible(true);lyr_Prioritarias_3.setVisible(true);
var layersList = [baseLayer,group_group1,lyr_MunReg_3_1,lyr_localidades_edomex_3_2,lyr_Prioritarias_3];
lyr_Municipios_0.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'ClaveMun': 'ClaveMun', });
lyr_MunReg_3_1.set('fieldAliases', {'GID': 'GID', 'CVE_ENT': 'CVE_ENT', 'ClaveMun': 'ClaveMun', 'Mun': 'Municipio', 'Region': 'Región', });
lyr_localidades_edomex_3_2.set('fieldAliases', {'GID': 'GID', 'Nom_Region': 'Región', 'Nom_Munici': 'Municipio', 'Nom_Locali': 'Localidad', 'CVE_Loc': 'Cve_Loc', });
lyr_Prioritarias_3.set('fieldAliases', {'GID': 'GID', 'Nom_Region': 'Región', 'Municipio': 'Municipio', 'Nom_Locali': 'Localidad', 'CVE_Loc': 'Cve_Loc', });
lyr_Municipios_0.set('fieldImages', {'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'ClaveMun': 'TextEdit', });
lyr_MunReg_3_1.set('fieldImages', {'GID': 'TextEdit', 'CVE_ENT': 'TextEdit', 'ClaveMun': 'TextEdit', 'Mun': 'TextEdit', 'Region': 'TextEdit', });
lyr_localidades_edomex_3_2.set('fieldImages', {'GID': 'TextEdit', 'Nom_Region': 'TextEdit', 'Nom_Munici': 'TextEdit', 'Nom_Locali': 'TextEdit', 'CVE_Loc': 'TextEdit', });
lyr_Prioritarias_3.set('fieldImages', {'GID': 'TextEdit', 'Nom_Region': 'TextEdit', 'Municipio': 'TextEdit', 'Nom_Locali': 'TextEdit', 'CVE_Loc': 'TextEdit', });
lyr_Municipios_0.set('fieldLabels', {'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'ClaveMun': 'no label', });
lyr_MunReg_3_1.set('fieldLabels', {'GID': 'inline label', 'CVE_ENT': 'inline label', 'ClaveMun': 'inline label', 'Mun': 'inline label', 'Region': 'inline label', });
lyr_localidades_edomex_3_2.set('fieldLabels', {'GID': 'inline label', 'Nom_Region': 'inline label', 'Nom_Munici': 'inline label', 'Nom_Locali': 'inline label', 'CVE_Loc': 'inline label', });
lyr_Prioritarias_3.set('fieldLabels', {'GID': 'inline label', 'Nom_Region': 'inline label', 'Municipio': 'inline label', 'Nom_Locali': 'inline label', 'CVE_Loc': 'inline label', });
lyr_Prioritarias_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});