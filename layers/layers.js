var wms_layers = [];

var format_MWI_adm2_0 = new ol.format.GeoJSON();
var features_MWI_adm2_0 = format_MWI_adm2_0.readFeatures(json_MWI_adm2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MWI_adm2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MWI_adm2_0.addFeatures(features_MWI_adm2_0);
var lyr_MWI_adm2_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MWI_adm2_0, 
                style: style_MWI_adm2_0,
                popuplayertitle: 'MWI_adm2',
                interactive: true,
                title: '<img src="styles/legend/MWI_adm2_0.png" /> MWI_adm2'
            });

lyr_MWI_adm2_0.setVisible(true);
var layersList = [lyr_MWI_adm2_0];
lyr_MWI_adm2_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_MWI_adm2_0.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'ID_2': '', 'NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'NL_NAME_2': '', 'VARNAME_2': '', });
lyr_MWI_adm2_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_MWI_adm2_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});