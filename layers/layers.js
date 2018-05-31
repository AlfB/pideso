var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_localidades_edomex_3_0 = new ol.format.GeoJSON();
var features_localidades_edomex_3_0 = format_localidades_edomex_3_0.readFeatures(json_localidades_edomex_3_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localidades_edomex_3_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_localidades_edomex_3_0.addFeatures(features_localidades_edomex_3_0);var lyr_localidades_edomex_3_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_localidades_edomex_3_0, 
                style: style_localidades_edomex_3_0,
                title: '<img src="styles/legend/localidades_edomex_3_0.png" /> localidades_edomex_3'
            });var format_Prioritarias_1 = new ol.format.GeoJSON();
var features_Prioritarias_1 = format_Prioritarias_1.readFeatures(json_Prioritarias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prioritarias_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Prioritarias_1.addFeatures(features_Prioritarias_1);var lyr_Prioritarias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prioritarias_1, 
                style: style_Prioritarias_1,
                title: '<img src="styles/legend/Prioritarias_1.png" /> Prioritarias'
            });var format_Municipios_2 = new ol.format.GeoJSON();
var features_Municipios_2 = format_Municipios_2.readFeatures(json_Municipios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Municipios_2.addFeatures(features_Municipios_2);var lyr_Municipios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_2, 
                style: style_Municipios_2,
                title: '<img src="styles/legend/Municipios_2.png" /> Municipios'
            });var format_MunReg_3_3 = new ol.format.GeoJSON();
var features_MunReg_3_3 = format_MunReg_3_3.readFeatures(json_MunReg_3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunReg_3_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MunReg_3_3.addFeatures(features_MunReg_3_3);var lyr_MunReg_3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunReg_3_3, 
                style: style_MunReg_3_3,
    title: 'Mun-Reg_3<br />\
    <img src="styles/legend/MunReg_3_3_0.png" /> Atlacomulco<br />\
    <img src="styles/legend/MunReg_3_3_1.png" /> Ixtapan<br />\
    <img src="styles/legend/MunReg_3_3_2.png" /> Ixtlahuaca<br />\
    <img src="styles/legend/MunReg_3_3_3.png" /> Lerma<br />\
    <img src="styles/legend/MunReg_3_3_4.png" /> Metepec<br />\
    <img src="styles/legend/MunReg_3_3_5.png" /> Tejupilco<br />\
    <img src="styles/legend/MunReg_3_3_6.png" /> Tepotzotlán<br />\
    <img src="styles/legend/MunReg_3_3_7.png" /> Toluca<br />\
    <img src="styles/legend/MunReg_3_3_8.png" /> Valle de Bravo<br />'
        });
		
var group_group1 = new ol.layer.Group({
                                layers: [lyr_Municipios_2],
                                title: "Estado"});
			
lyr_localidades_edomex_3_0.setVisible(true);lyr_Prioritarias_1.setVisible(true);lyr_Municipios_2.setVisible(true);lyr_MunReg_3_3.setVisible(true);
var layersList = [baseLayer,lyr_localidades_edomex_3_0,lyr_Prioritarias_1,group_group1,lyr_MunReg_3_3];
lyr_localidades_edomex_3_0.set('fieldAliases', {'GID': 'GID', 'Nom_Region': 'Nom_Region', 'Nom_Munici': 'Nom_Munici', 'Nom_Locali': 'Nom_Locali', 'CVE_Loc': 'CVE_Loc', });
lyr_Prioritarias_1.set('fieldAliases', {'GID': 'GID', 'Nom_Region': 'Nom_Region', 'Municipio': 'Municipio', 'Nom_Locali': 'Nom_Locali', 'CVE_Loc': 'CVE_Loc', });
lyr_Municipios_2.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'ClaveMun': 'ClaveMun', });
lyr_MunReg_3_3.set('fieldAliases', {'GID': 'ID','Mun': 'Municipio', 'Region': 'Región', 'pobreza_extrema':'Pobreza extrema','pobreza_moderada': 'Pobreza moderada',
'vulnerable_por_ingresos':'Vulnerable por ingresos','vulnerable_por_carencias':'Vulnerable por carencia','no_vulnerable':'No Vulnerable',});
lyr_localidades_edomex_3_0.set('fieldImages', {'GID': 'TextEdit', 'Nom_Region': 'TextEdit', 'Nom_Munici': 'TextEdit', 'Nom_Locali': 'TextEdit', 'CVE_Loc': 'TextEdit', });
lyr_Prioritarias_1.set('fieldImages', {'GID': 'TextEdit', 'Nom_Region': 'TextEdit', 'Municipio': 'TextEdit', 'Nom_Locali': 'TextEdit', 'CVE_Loc': 'TextEdit', });
lyr_Municipios_2.set('fieldImages', {'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'ClaveMun': 'TextEdit', });
lyr_MunReg_3_3.set('fieldImages', {'GID': 'TextEdit', 'Mun': 'TextEdit', 'Region': 'TextEdit', 'pobreza_extrema':'TextEdit','pobreza_moderada':'TextEdit',
'vulnerable_por_ingresos':'TextEdit','vulnerable_por_carencias':'TextEdit','no_vulnerable':'TextEdit',});
lyr_localidades_edomex_3_0.set('fieldLabels', {'GID': 'inline label', 'Nom_Region': 'inline label', 'Nom_Munici': 'inline label', 'Nom_Locali': 'inline label', 'CVE_Loc': 'inline label', });
lyr_Prioritarias_1.set('fieldLabels', {'GID': 'inline label', 'Nom_Region': 'inline label', 'Municipio': 'inline label', 'Nom_Locali': 'inline label', 'CVE_Loc': 'inline label', });
lyr_Municipios_2.set('fieldLabels', {'CVE_ENT': 'inline label', 'CVE_MUN': 'inline label', 'ClaveMun': 'inline label', });
lyr_MunReg_3_3.set('fieldLabels', {'GID': 'inline label', 'Mun': 'inline label', 'Region': 'inline label','pobreza_extrema':'inline label','pobreza_moderada':'inline label',
 'vulnerable_por_ingresos':'inline label','vulnerable_por_carencias':'inline label','no_vulnerable':'inline label',});
lyr_MunReg_3_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});