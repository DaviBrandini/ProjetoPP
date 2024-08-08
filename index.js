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

function initMap() {
    // Inicializa o mapa
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: -30.0346, lng: -51.2177 }
    });

    // Adiciona marcadores para os pontos turísticos
    const spots = [
        { position: { lat: -30.0366, lng: -51.2177 }, title: 'Parque Farroupilha (Redenção)' },
        { position: { lat: -30.0277, lng: -51.2287 }, title: 'Mercado Público de Porto Alegre' },
        { position: { lat: -30.0343, lng: -51.2428 }, title: 'Usina do Gasômetro' },
        { position: { lat: -30.0561, lng: -51.1763 }, title: 'Jardim Botânico de Porto Alegre' }
    ];

    spots.forEach(spot => {
        const marker = new google.maps.Marker({
            position: spot.position,
            map: map,
            title: spot.title
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${spot.title}</h3><p><button onclick="showMoreInfo('${spot.title.toLowerCase().replace(/ /g, '-')})">Mais informações</button></p>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

function showMoreInfo(spotId) {
    // Aqui você pode adicionar código para mostrar mais informações sobre o ponto turístico
    alert(`Mais informações sobre ${spotId.replace(/-/g, ' ')}`);
}

document.getElementById('handleSubmit').addEventListener('click', function(event) {
    event.preventDefault();
    const address = document.getElementById('title').value;
    document.getElementById('messages').innerText = `Endereço enviado: ${address}`;
});

