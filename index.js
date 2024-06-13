function initMap() {
    const portoAlegre = { lat: -30.0346, lng: -51.2177 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: portoAlegre,
    });
    const marker = new google.maps.Marker({
        position: portoAlegre,
        map: map,
    });
}

window.initMap = initMap;
