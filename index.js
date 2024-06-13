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

let button = document.getElementById("handleSubmit");
 
button.onclick = async function() {
    let title = document.getElementById("title").value;
    // let description = document.getElementById("description").value;
    let data = {title}
 
    const response = await fetch('http://localhost:3000/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });
 
    let content = await response.json();
 
    if(content.success) {
        alert("Sucesso")
    } else{
        alert('Não');
    }
}
