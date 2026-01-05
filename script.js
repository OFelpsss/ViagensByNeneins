// Dados das viagens - lugares reais que visitamos!
const trips = [
    {
        id: 1,
        location: "Campos do Jordão, São Paulo",
        lat: -22.7394,
        lng: -45.5914,
        date: "Dezembro 2024",
        title: "Suíça Brasileira",
        description: "Campos do Jordão, conhecida como a Suíça Brasileira, nos encantou com sua arquitetura alpina e clima europeu! 🌲⛰️ A cidade mais alta do Brasil nos recebeu com suas ruas de paralelepípedos, chocolates artesanais deliciosos e restaurantes aconchegantes. ❄️✨",
        photos: [
            { url: "/fotos/01-campos-do-jordao/foto1.jpeg", alt: "Campos do Jordão" },
            { url: "/fotos/01-campos-do-jordao/foto2.jpg", alt: "Campos do Jordão" },
            { url: "/fotos/01-campos-do-jordao/foto3.jpg", alt: "Campos do Jordão" },
            { url: "/fotos/01-campos-do-jordao/foto4.jpg", alt: "Campos do Jordão" },
            { url: "/fotos/01-campos-do-jordao/foto5.jpg", alt: "Campos do Jordão" },
            { url: "/fotos/01-campos-do-jordao/foto6.jpg", alt: "Campos do Jordão" },
            { url: "/fotos/01-campos-do-jordao/foto7.jpg", alt: "Campos do Jordão" },
            { url: "/fotos/01-campos-do-jordao/foto8.jpg", alt: "Campos do Jordão" },
            { url: "/fotos/01-campos-do-jordao/foto9.jpg", alt: "Campos do Jordão" },
            { url: "/fotos/01-campos-do-jordao/foto10.jpg", alt: "Campos do Jordão" },
        ]
    },
    {
        id: 2,
        location: "Monte Verde, Minas Gerais",
        lat: -22.8631,
        lng: -46.0350,
        date: "Dezembro 2025",
        title: "Paraíso nas Montanhas",
        description: "Monte Verde, o distrito mineiro em plena Serra da Mantiqueira, nos conquistou com sua tranquilidade! 🌳💧 A pequena vila nos presenteou com trilhas pela Mata Atlântica. Experimentamos a autêntica comida mineira, exploramos as lojas de artesanato local e nos encantamos com o jeito acolhedor do povo. Cada cantinho dessa vila charmosa respira paz e natureza preservada! 🏔️🌄",
        photos: [
            { url: "/fotos/02-monte-verde/foto1.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto2.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto3.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto4.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto5.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto6.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto7.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto8.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto9.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto10.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto11.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto12.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto13.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto14.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto15.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto16.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto17.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto18.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto19.jpeg", alt: "Monte Verde" },
            { url: "/fotos/02-monte-verde/foto20.jpeg", alt: "Monte Verde" },
        ]
    },
    {
        id: 3,
        location: "Parque Aquático Thermas da Mata, Cotia - São Paulo",
        lat: -23.630744310515677,
        lng: -46.94860368381737,
        date: "Setembro 2025",
        title: "Diversão Aquática",
        description: "O Thermas da Mata em Cotia nos surpreendeu com seu cenário paradisíaco! 💦🌴 Localizado na Estrada Morro Grande, o parque temático oferece águas termais naturais, tobogãs emocionantes e piscinas relaxantes cercadas por muito verde. Mas o momento mais especial foi quando assistimos ao show do Hungria, nosso cantor preferido! 🎤🔥 Cantamos juntos todas as músicas, pulamos, dançamos e vivemos um dia inesquecível. O parque se transformou em um palco de alegria e energia positiva! 🎶💖",
        photos: [
            { url: "/fotos/03-thermas-da-mata/foto1.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto2.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto3.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto4.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto5.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto6.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto7.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto8.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto9.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto10.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto11.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto12.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto13.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto14.jpeg", alt: "Thermas da Mata" },
            { url: "/fotos/03-thermas-da-mata/foto15.jpeg", alt: "Thermas da Mata" },
        ]
    },
    {
        id: 4,
        location: "Parque Aquático Wet n Wild, - São Paulo",
        lat: -23.1005,
        lng: -47.0105,
        date: "2024",
        title: "Aventura Radical",
        description: "Wet n Wild, um dos maiores parques aquáticos do Brasil, nos proporcionou um dia de adrenalina pura! 🌊🎢 Foi um dia risadas e muita diversão aquática! 💦😄",
        photos: [
            { url: "/fotos/04-wet-n-wild/foto1.jpeg", alt: "Wet n Wild" },
        ]
    },
    {
        id: 5,
        location: "Parque de Diversão Hopi Hari, - São Paulo",
        lat: -23.0985,
        lng: -47.0090,
        date: "Fevereiro 2025",
        title: "Diversão Total",
        description: "Hopi Hari, o maior parque temático do Brasil, nos levou a uma jornada de diversão! 🎡🎪 Exploramos todas as áreas temáticas. O parque, com sua atmosfera mágica, nos fez voltar à infância e criar memórias alegres! 🎢✨",
        photos: [
            { url: "/fotos/05-hopi-hari/foto1.jpeg", alt: "Hopi Hari" },
            { url: "/fotos/05-hopi-hari/foto2.jpeg", alt: "Hopi Hari" },
            { url: "/fotos/05-hopi-hari/foto3.jpeg", alt: "Hopi Hari" },
            { url: "/fotos/05-hopi-hari/foto4.jpeg", alt: "Hopi Hari" },
            { url: "/fotos/05-hopi-hari/foto5.jpeg", alt: "Hopi Hari" },
            { url: "/fotos/05-hopi-hari/foto6.jpeg", alt: "Hopi Hari" },
        ]
    },
    {
        id: 6,
        location: "Bertioga, São Paulo",
        lat: -23.846491349645753,
        lng: -46.132062264544224,
        date: "Setembro 2025",
        title: "Curtindo Bertioga",
        description: "Bertioga, o primeiro povoado do litoral paulista, nos recebeu com suas praias paradisíacas! 🏖️🌊 Conhecida por sua rica história (foi fundada em 1547) e natureza preservada. Bertioga combina perfeitamente história, natureza e belas praias! 🏝️🌴",
        photos: [
            { url: "/fotos/06-bertioga/foto1.jpeg", alt: "Bertioga" },
            { url: "/fotos/06-bertioga/foto2.jpeg", alt: "Bertioga" },
            { url: "/fotos/06-bertioga/foto3.jpeg", alt: "Bertioga" },
            { url: "/fotos/06-bertioga/foto4.jpeg", alt: "Bertioga" },
            { url: "/fotos/06-bertioga/foto5.jpeg", alt: "Bertioga" },
            { url: "/fotos/06-bertioga/foto6.jpeg", alt: "Bertioga" },
            { url: "/fotos/06-bertioga/foto7.jpeg", alt: "Bertioga" },
            { url: "/fotos/06-bertioga/foto8.jpeg", alt: "Bertioga" },
        ]
    }
];

// Inicializar o mapa
let map;
let markers = [];

function initMap() {
    // Calcular o centro e zoom ideal para mostrar todos os marcadores
    const bounds = L.latLngBounds(trips.map(trip => [trip.lat, trip.lng]));
    const center = bounds.getCenter();
    
    // Criar o mapa começando com zoom baixo para animação
    map = L.map('map', {
        center: center,
        zoom: 1,  // Começa com zoom baixo para animação
        worldCopyJump: false,  // Desabilita a repetição do mapa
        maxBounds: [[-85, -180], [85, 180]],  // Limita os limites do mapa
        maxBoundsViscosity: 1.0  // Força o mapa a ficar dentro dos limites
    });

    // Adicionar tile layer de satélite (Esri World Imagery) - SEM repetição
    const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '',  // Removida a atribuição
        maxZoom: 19,
        noWrap: true,  // Impede a repetição horizontal
        bounds: [[-85, -180], [85, 180]]  // Define os limites do mundo
    }).addTo(map);

    // Adicionar camada de labels (nomes dos lugares) por cima do satélite - SEM repetição
    const labelsLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        attribution: '',  // Removida a atribuição
        maxZoom: 19,
        noWrap: true,  // Impede a repetição horizontal
        bounds: [[-85, -180], [85, 180]]  // Define os limites do mundo
    }).addTo(map);

    // Prevenir que o mapa seja arrastado além dos limites
    map.on('drag', function() {
        const bounds = map.getBounds();
        const maxBounds = L.latLngBounds([[-85, -180], [85, 180]]);
        
        if (!maxBounds.contains(bounds)) {
            const center = map.getCenter();
            const newLat = Math.max(-85, Math.min(85, center.lat));
            const newLng = Math.max(-180, Math.min(180, center.lng));
            map.setView([newLat, newLng], map.getZoom(), { animate: false });
        }
    });

    // Adicionar marcadores para cada viagem
    trips.forEach(trip => {
        addTripMarker(trip);
    });

    // Animação de zoom ao carregar a página
    setTimeout(() => {
        // Ajustar o mapa para mostrar todos os marcadores com padding
        map.fitBounds(bounds, {
            padding: [50, 50],  // Padding para não colar nas bordas
            maxZoom: 8,  // Zoom máximo para não ficar muito próximo
            animate: true,
            duration: 2.0  // Duração da animação em segundos
        });
    }, 500);  // Pequeno delay para garantir que o mapa está carregado

    // Atualizar estatísticas
    updateStats();
}

// Criar marcador personalizado
function createCustomIcon() {
    return L.divIcon({
        className: 'custom-marker-container',
        html: '<div class="custom-marker"></div>',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });
}

// Adicionar marcador de viagem no mapa
function addTripMarker(trip) {
    const icon = createCustomIcon();
    
    const marker = L.marker([trip.lat, trip.lng], { icon: icon })
        .addTo(map)
        .bindPopup(`
            <div style="text-align: center; padding: 10px;">
                <h3 style="margin: 0 0 5px 0; color: #212529; font-size: clamp(0.9rem, 2vw, 1rem);">${trip.title}</h3>
                <p style="margin: 0; color: #495057; font-size: clamp(0.8rem, 1.8vw, 0.9em);">${trip.location}</p>
                <p style="margin: 5px 0 0 0; color: #6c757d; font-size: clamp(0.75rem, 1.6vw, 0.85em);">${trip.date}</p>
                <button onclick="openTripModal(${trip.id}); map.closePopup();" style="
                    margin-top: 10px;
                    padding: clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 15px);
                    background: #495057;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: clamp(0.8rem, 1.8vw, 0.9rem);
                    transition: all 0.2s;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                " onmouseover="this.style.background='#212529'; this.style.transform='scale(1.05)'" onmouseout="this.style.background='#495057'; this.style.transform='scale(1)'">
                    Ver Fotos
                </button>
            </div>
        `);

    marker.tripId = trip.id;
    markers.push(marker);

    // Remover o evento de clique direto que abria o modal
    // Agora só abre o popup no primeiro clique, e o modal abre ao clicar em "Ver Fotos"
}

// Abrir modal com detalhes da viagem
function openTripModal(tripId) {
    const trip = trips.find(t => t.id === tripId);
    if (!trip) return;

    const modal = document.getElementById('trip-modal');
    const title = document.getElementById('modal-title');
    const location = document.getElementById('modal-location');
    const date = document.getElementById('modal-date');
    const description = document.getElementById('modal-description');
    const gallery = document.getElementById('photo-gallery');

    title.textContent = trip.title;
    location.textContent = `📍 ${trip.location}`;
    date.textContent = `📅 ${trip.date}`;
    description.textContent = trip.description;

    // Limpar galeria anterior
    gallery.innerHTML = '';

    // Adicionar fotos à galeria
    trip.photos.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.innerHTML = `
            <img src="${photo.url}" alt="${photo.alt}" loading="lazy" onclick="openPhotoViewer(${tripId}, ${index})">
        `;
        gallery.appendChild(photoItem);
    });

    // Mostrar modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Fechar modal ao clicar no X
    const closeBtn = document.querySelector('.close');
    closeBtn.onclick = function() {
        closeTripModal();
    };

    // Fechar modal ao clicar fora
    window.onclick = function(event) {
        if (event.target === modal) {
            closeTripModal();
        }
    };

    // Fechar com ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeTripModal();
        }
    });
}

// Fechar modal
function closeTripModal() {
    const modal = document.getElementById('trip-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Visualizador de foto em tela cheia (simplificado)
function openPhotoViewer(tripId, photoIndex) {
    const trip = trips.find(t => t.id === tripId);
    if (!trip || !trip.photos[photoIndex]) return;

    // Criar overlay para visualização de foto
    const viewer = document.createElement('div');
    viewer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `;

    const img = document.createElement('img');
    img.src = trip.photos[photoIndex].url;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
    `;

    viewer.appendChild(img);
    document.body.appendChild(viewer);

    viewer.onclick = function() {
        document.body.removeChild(viewer);
    };
}

// Atualizar estatísticas
function updateStats() {
    const totalTrips = trips.length;
    const totalCountries = 1; // Todas as viagens foram no Brasil
    const totalPhotos = trips.reduce((sum, trip) => sum + trip.photos.length, 0);

    // Animar contadores
    animateCounter('total-trips', totalTrips);
    animateCounter('total-countries', totalCountries);
    animateCounter('total-photos', totalPhotos);
}

// Animar contador
function animateCounter(elementId, target) {
    const element = document.getElementById(elementId);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    
    // Ajustar o tamanho do mapa quando a janela redimensionar
    setTimeout(function() {
        map.invalidateSize();
    }, 100);
});

// Ajustar o mapa quando a janela redimensionar
window.addEventListener('resize', function() {
    if (map) {
        setTimeout(function() {
            map.invalidateSize();
        }, 100);
    }
});

