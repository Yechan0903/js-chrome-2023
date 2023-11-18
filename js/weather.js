function onGeoOk(position) {
    console.log("yeah");
}
function onGeoError() {
    alert("can't find you");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);