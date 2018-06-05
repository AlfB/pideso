function api(){
        var req = new XMLHttpRequest();
        req.open('GET', 'http://187.216.191.84/pideso/api/api/mapa3', false); 
        req.send(null);
        return JSON.parse(req.responseText);
    }
	var x = api();
	 
var json_Prioritarias_1 = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": x.data[0], "geometry": { "type": "Point", "coordinates": [ -99.489237221999986, 19.546518056000025, 0.0 ] } },
{ "type": "Feature", "properties": x.data[1], "geometry": { "type": "Point", "coordinates": [ -99.456671666999966, 19.311788611000054, 0.0 ] } },
{ "type": "Feature", "properties": x.data[2], "geometry": { "type": "Point", "coordinates": [ -99.546045904999971, 19.694738671000039, 0.0 ] } },
{ "type": "Feature", "properties": x.data[3], "geometry": { "type": "Point", "coordinates": [ -100.27772777799998, 19.202237500000024, 0.0 ] } },
{ "type": "Feature", "properties": x.data[4], "geometry": { "type": "Point", "coordinates": [ -99.939849443999947, 18.766848333000041, 0.0 ] } },
{ "type": "Feature", "properties": x.data[5], "geometry": { "type": "Point", "coordinates": [ -99.671851110999967, 19.069404444000043, 0.0 ] } },
{ "type": "Feature", "properties": x.data[6], "geometry": { "type": "Point", "coordinates": [ -100.13021515799994, 18.65103341400004, 0.0 ] } },
{ "type": "Feature", "properties": x.data[7], "geometry": { "type": "Point", "coordinates": [ -99.840538055999957, 19.078382500000032, 0.0 ] } },
{ "type": "Feature", "properties": x.data[8], "geometry": { "type": "Point", "coordinates": [ -100.39068944399997, 19.021078056000022, 0.0 ] } },
{ "type": "Feature", "properties": x.data[9], "geometry": { "type": "Point", "coordinates": [ -100.25255694399999, 19.699307778000048, 0.0 ] } }
]
}
