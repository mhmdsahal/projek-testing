var wms_layers = [];

        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'GoogleRoad_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_SklhAkreditasi_1 = new ol.format.GeoJSON();
var features_SklhAkreditasi_1 = format_SklhAkreditasi_1.readFeatures(json_SklhAkreditasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SklhAkreditasi_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SklhAkreditasi_1.addFeatures(features_SklhAkreditasi_1);var lyr_SklhAkreditasi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SklhAkreditasi_1, 
                style: style_SklhAkreditasi_1,
    title: 'SklhAkreditasi<br />\
    <img src="styles/legend/SklhAkreditasi_1_0.png" /> 4<br />\
    <img src="styles/legend/SklhAkreditasi_1_1.png" /> 7<br />\
    <img src="styles/legend/SklhAkreditasi_1_2.png" /> 16<br />\
    <img src="styles/legend/SklhAkreditasi_1_3.png" /> 17<br />\
    <img src="styles/legend/SklhAkreditasi_1_4.png" /> 18<br />\
    <img src="styles/legend/SklhAkreditasi_1_5.png" /> <br />'
        });var format_smpakreditasi_2 = new ol.format.GeoJSON();
var features_smpakreditasi_2 = format_smpakreditasi_2.readFeatures(json_smpakreditasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_smpakreditasi_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_smpakreditasi_2.addFeatures(features_smpakreditasi_2);var lyr_smpakreditasi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_smpakreditasi_2, 
                style: style_smpakreditasi_2,
                title: '<img src="styles/legend/smpakreditasi_2.png" /> smpakreditasi'
            });var format_smaakreditasi_3 = new ol.format.GeoJSON();
var features_smaakreditasi_3 = format_smaakreditasi_3.readFeatures(json_smaakreditasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_smaakreditasi_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_smaakreditasi_3.addFeatures(features_smaakreditasi_3);var lyr_smaakreditasi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_smaakreditasi_3, 
                style: style_smaakreditasi_3,
                title: '<img src="styles/legend/smaakreditasi_3.png" /> smaakreditasi'
            });var format_smkakreditasi_4 = new ol.format.GeoJSON();
var features_smkakreditasi_4 = format_smkakreditasi_4.readFeatures(json_smkakreditasi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_smkakreditasi_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_smkakreditasi_4.addFeatures(features_smkakreditasi_4);var lyr_smkakreditasi_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_smkakreditasi_4, 
                style: style_smkakreditasi_4,
                title: '<img src="styles/legend/smkakreditasi_4.png" /> smkakreditasi'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_SklhAkreditasi_1.setVisible(true);lyr_smpakreditasi_2.setVisible(true);lyr_smaakreditasi_3.setVisible(true);lyr_smkakreditasi_4.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_SklhAkreditasi_1,lyr_smpakreditasi_2,lyr_smaakreditasi_3,lyr_smkakreditasi_4];
lyr_SklhAkreditasi_1.set('fieldAliases', {'id': 'id', 'Nama_Kec': 'Nama_Kec', 'Sklh_Akrdt': 'Sklh_Akrdt', 'Jmlh_Sklh': 'Jmlh_Sklh', 'Jmlh_Murid': 'Jmlh_Murid', });
lyr_smpakreditasi_2.set('fieldAliases', {'id': 'id', 'SMPakrdts': 'SMPakrdts', });
lyr_smaakreditasi_3.set('fieldAliases', {'id': 'id', 'SMAakrdts': 'SMAakrdts', });
lyr_smkakreditasi_4.set('fieldAliases', {'id': 'id', 'smkakrdtsi': 'smkakrdtsi', });
lyr_SklhAkreditasi_1.set('fieldImages', {'id': 'TextEdit', 'Nama_Kec': 'TextEdit', 'Sklh_Akrdt': 'TextEdit', 'Jmlh_Sklh': 'TextEdit', 'Jmlh_Murid': 'TextEdit', });
lyr_smpakreditasi_2.set('fieldImages', {'id': 'TextEdit', 'SMPakrdts': 'TextEdit', });
lyr_smaakreditasi_3.set('fieldImages', {'id': 'TextEdit', 'SMAakrdts': 'TextEdit', });
lyr_smkakreditasi_4.set('fieldImages', {'id': 'TextEdit', 'smkakrdtsi': 'TextEdit', });
lyr_SklhAkreditasi_1.set('fieldLabels', {'id': 'inline label', 'Nama_Kec': 'inline label', 'Sklh_Akrdt': 'inline label', 'Jmlh_Sklh': 'no label', 'Jmlh_Murid': 'no label', });
lyr_smpakreditasi_2.set('fieldLabels', {'id': 'no label', 'SMPakrdts': 'no label', });
lyr_smaakreditasi_3.set('fieldLabels', {'id': 'no label', 'SMAakrdts': 'no label', });
lyr_smkakreditasi_4.set('fieldLabels', {'id': 'no label', 'smkakrdtsi': 'no label', });
lyr_smkakreditasi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});