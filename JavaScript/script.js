const title = document.getElementById("title");
const selectedCity = document.getElementById("selected-city");
const citySubtitle = document.getElementById("city-subtitle");
const suggest = document.getElementById("suggestions");
const citySelector = document.getElementById("city-selector");
const themeToggle = document.getElementById("theme-toggle");
const citySearchInput = document.getElementById("city-search");
const filterBar = document.getElementById("filter-bar");
const plannerList = document.getElementById("planner-list");
const summaryCity = document.getElementById("summary-city");
const summaryCount = document.getElementById("summary-count");
const summaryTrip = document.getElementById("summary-trip");
const cityRegion = document.getElementById("city-region");
const citySeason = document.getElementById("city-season");
const cityBudget = document.getElementById("city-budget");
const cityTotal = document.getElementById("city-total");
const placeTotal = document.getElementById("place-total");
const categoryTotal = document.getElementById("category-total");
const searchButton = document.querySelector(".search-btn");
const exploreButton = document.querySelector(".hero-actions .primary-btn");
const itineraryButton = document.querySelector(".hero-actions .secondary-btn");
const exportRouteButton = document.querySelector(".accent-panel .primary-btn");

const city = {
    Tehran: {
        subtitle: "Capital culture and mountain views",
        region: "Capital region",
        season: "Spring",
        budget: "$$$",
        accent: "#d97706",
        center: [51.389, 35.6892],
        places: [
            { name: "Golestan Palace", category: "Historic", description: "A royal complex with Persian garden elegance and intricate tilework.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Golestan_Palace%2C_Tehran%2C_Iran_%2853760330898%29.jpg/960px-Golestan_Palace%2C_Tehran%2C_Iran_%2853760330898%29.jpg?utm_source=fa.wikipedia.org&utm_campaign=index&utm_content=thumbnail" },
            { name: "Azadi Tower", category: "Culture", description: "A modern symbol of Tehran and one of the city’s most iconic landmarks.", image: "https://images.unsplash.com/photo-1519058492434-946de8a5c0c4?auto=format&fit=crop&w=800&q=80" },
            { name: "Milad Tower", category: "Scenic", description: "An iconic skyline landmark offering panoramic views over Tehran.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" },
            { name: "Tehran Grand Bazaar", category: "Market", description: "A maze of traditional shops, spices, carpets, and Persian charm.", image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80" },
            { name: "Sa'dabad Palace", category: "Historic", description: "A beautiful historical palace complex with lush gardens.", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80" },
            { name: "Niavaran Palace", category: "Culture", description: "A lavish royal residence known for its architecture and history.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    Qazvin: {
        subtitle: "Historic architecture and traditional markets",
        region: "Northwest Iran",
        season: "Spring",
        budget: "$$",
        accent: "#059669",
        center: [49.99, 36.266],
        places: [
            { name: "Sa'd al-Saltaneh Caravanserai", category: "Historic", description: "A classic stop on Iran’s caravan routes and a historic wonder.", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" },
            { name: "Chehel Sotoun Pavilion", category: "Historic", description: "A splendid pavilion rich in Persian cultural heritage.", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80" },
            { name: "Qazvin Bazaar", category: "Market", description: "A vibrant local bazaar filled with atmosphere and crafts.", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" },
            { name: "Jameh Mosque", category: "Historic", description: "A graceful architectural gem with centuries of history.", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80" },
            { name: "Alamut Castle", category: "Adventure", description: "A dramatic mountain fortress and legendary historical site.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    Isfahan: {
        subtitle: "Bridge city, grand squares, and Persian elegance",
        region: "Central Iran",
        season: "Autumn",
        budget: "$$$",
        accent: "#2563eb",
        center: [51.679, 32.654],
        places: [
            { name: "Naqsh-e Jahan Square", category: "Historic", description: "One of the largest historic city squares in the world.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" },
            { name: "Si-o-se-pol Bridge", category: "Scenic", description: "A legendary bridge that captures the beauty of Isfahan.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" },
            { name: "Khaju Bridge", category: "Scenic", description: "A historic urban bridge with beautiful reflections at night.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" },
            { name: "Sheikh Lotfollah Mosque", category: "Historic", description: "Famous for its dazzling architecture and peaceful atmosphere.", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80" },
            { name: "Vank Cathedral", category: "Culture", description: "An iconic Armenian church with extraordinary art and design.", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" },
            { name: "Chehel Sotoun Palace", category: "Historic", description: "A historic palace with beautiful gardens and courtyards.", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    Shiraz: {
        subtitle: "Poetry, gardens, and ancient heritage",
        region: "South Iran",
        season: "Spring",
        budget: "$$",
        accent: "#7c3aed",
        center: [52.531, 29.61],
        places: [
            { name: "Persepolis", category: "Historic", description: "One of the most legendary archaeological sites in the world.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" },
            { name: "Nasir al-Mulk Mosque", category: "Culture", description: "A masterpiece of light, color, and elegance in Shiraz.", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80" },
            { name: "Eram Garden", category: "Nature", description: "A serene and beautiful garden with elegant Persian design.", image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80" },
            { name: "Hafez Tomb", category: "Culture", description: "A peaceful literary destination dedicated to Persia’s beloved poet.", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80" },
            { name: "Vakil Bazaar", category: "Market", description: "A bustling bazaar rooted in Shiraz’s historic commercial life.", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80" },
            { name: "Karim Khan Citadel", category: "Historic", description: "A striking historic fortress in the heart of the city.", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    Yazd: {
        subtitle: "Desert heritage and ancient adobe architecture",
        region: "Central Desert",
        season: "Winter",
        budget: "$$",
        accent: "#f97316",
        center: [54.367, 31.897],
        places: [
            { name: "Dowlat Abad Garden", category: "Nature", description: "A UNESCO-listed Persian garden famous for its towering windcatchers.", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" },
            { name: "Yazd Old Town", category: "Historic", description: "A maze of winding lanes, courtyards, and traditional houses.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" },
            { name: "Jameh Mosque", category: "Historic", description: "A grand example of Islamic architecture in the desert city.", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80" },
            { name: "Zoroastrian Fire Temple", category: "Culture", description: "A meaningful spiritual site tied to ancient Persian faith.", image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80" },
            { name: "Towers of Silence", category: "Culture", description: "A unique historical site with desert views and mystic atmosphere.", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80" },
            { name: "Amir Chakhmaq Complex", category: "Historic", description: "Known for its beautiful architecture and lively public square.", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    Mashhad: {
        subtitle: "Pilgrimage city, spirituality and vibrant culture",
        region: "Northeast Iran",
        season: "Spring",
        budget: "$$",
        accent: "#f43f5e",
        center: [59.567, 36.26],
        places: [
            { name: "Imam Reza Shrine", category: "Historic", description: "A major spiritual site and one of Iran’s most respected landmarks.", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80" },
            { name: "Astan Quds Museum", category: "Culture", description: "A rich collection of history, art, and sacred heritage.", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80" },
            { name: "Gonbad Sabz", category: "Historic", description: "An elegant historic monument admired for its green tilework.", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80" },
            { name: "Koohsangi Park", category: "Nature", description: "A scenic park for relaxed strolls and family outings.", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    Tabriz: {
        subtitle: "Cultural heart of northwest Iran",
        region: "Northwest Iran",
        season: "Autumn",
        budget: "$$",
        accent: "#0ea5e9",
        center: [46.291, 38.083],
        places: [
            { name: "Blue Mosque", category: "Historic", description: "A masterpiece of tilework and Persian architecture.", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80" },
            { name: "Tabriz Grand Bazaar", category: "Market", description: "One of the world’s oldest and busiest covered markets.", image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80" },
            { name: "El Goli Park", category: "Nature", description: "A pleasant city park known for scenic walks and evening views.", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80" },
            { name: "Azerbaijan Museum", category: "Culture", description: "A great place to learn about the region’s heritage and art.", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    Kerman: {
        subtitle: "Desert landscapes and historical stories",
        region: "Southeast Iran",
        season: "Winter",
        budget: "$$",
        accent: "#84cc16",
        center: [57.083, 30.283],
        places: [
            { name: "Arg-e Bam", category: "Historic", description: "A magnificent ancient citadel and UNESCO monument.", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" },
            { name: "Mahan Garden", category: "Nature", description: "A beautiful and tranquil destination with Persian charm.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" },
            { name: "Kerman Bazaar", category: "Market", description: "A lively traditional bazaar with local goods and history.", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    BandarAbbas: {
        subtitle: "Sea breeze, coastal charm and Persian Gulf energy",
        region: "Southern Coast",
        season: "Winter",
        budget: "$$",
        accent: "#14b8a6",
        center: [56.266, 27.183],
        places: [
            { name: "Lengeh Beach", category: "Nature", description: "A coastal escape with mesmerizing sea views.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
            { name: "Hormuz Island", category: "Adventure", description: "A colorful volcanic island with unusual landscapes.", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80" },
            { name: "Port of Bandar Abbas", category: "Scenic", description: "A vibrant maritime hub with Persian Gulf atmosphere.", image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    Rasht: {
        subtitle: "Green landscapes and northern Persian serenity",
        region: "Northern Iran",
        season: "Summer",
        budget: "$$",
        accent: "#22c55e",
        center: [49.603, 37.283],
        places: [
            { name: "Sefidroud Forests", category: "Nature", description: "Beautiful natural scenery and lush green landscapes.", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
            { name: "Gilan Museum", category: "Culture", description: "A window into the unique cultural identity of northern Iran.", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80" },
            { name: "Rasht Bazaar", category: "Market", description: "A relaxed local market with fresh produce and culture.", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    Bushehr: {
        subtitle: "Historic ports and Gulf coast beauty",
        region: "Southern Coast",
        season: "Winter",
        budget: "$$",
        accent: "#38bdf8",
        center: [50.836, 28.916],
        places: [
            { name: "Bushehr Port", category: "Scenic", description: "A coastal city known for its harbor and sea views.", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80" },
            { name: "Old Bushehr", category: "Historic", description: "Historic architecture and an authentic maritime character.", image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80" },
            { name: "Hendijan Coast", category: "Nature", description: "A peaceful seaside experience with warm weather and waves.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" }
        ]
    },
    Sari: {
        subtitle: "Forest vibes, culture and northern charm",
        region: "Mazandaran",
        season: "Summer",
        budget: "$$",
        accent: "#a855f7",
        center: [53.058, 36.563],
        places: [
            { name: "Gorgan Bay", category: "Nature", description: "A scenic area known for coastal and natural beauty.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Gulf_of_Gorgan_20160619_26.jpg/250px-Gulf_of_Gorgan_20160619_26.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
            { name: "Sari Bazaar", category: "Market", description: "An authentic city market with local flavors and crafts.", image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Sari_bazar_10.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
            { name: "Mazandaran Nature", category: "Nature", description: "A refreshing northern landscape with green hills and forests.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f0/c6/cd/oben-waterfalls.jpg?w=700&h=400&s=1" }
        ]
    },
    Karaj: {
        subtitle:"A gateway to Alborz mountains, nature, and weekend escapes",
        region: "Alborz Province",
        season:"Spring & Autumn",
        budget:"$$",
        accent: "#a85f",
        center: [50.9916, 35.8400],
        places:[
            {name:"Shah Abbasi Caravanserai", category:"Historical", description:"A historic Safavid-era caravanserai in the heart of Karaj.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Farasfaj_caravanserai_20190507_17.jpg/330px-Farasfaj_caravanserai_20190507_17.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"},
            {name:"Morvarid Palace", category:"Historical", description:"A unique palace in Mehrshahr known for its distinctive architecture.", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Pearl_Palace_-Kakh_e_Morvarid-_Karaj_Iran.jpg/330px-Pearl_Palace_-Kakh_e_Morvarid-_Karaj_Iran.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"},
            {name:"Bam-e Karaj", category:"Nature", description:"A scenic viewpoint offering panoramic views of Karaj and the surrounding mountains.", image:"https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format=webp,w=720/QwRY54Li1HMwD7oNfofxOHiJ2KKUgWiNqbSYVegww4"},
            {name:"Fateh Garden", category:"Park", description:"A peaceful green space in Karaj, perfect for walking and relaxing.", image:"https://seeiran.ir/en/wp-content/uploads/2026/09/%D8%A8%D8%A7%D8%BA-%D9%81%D8%A7%D8%AA%D8%AD-%DA%A9%D8%B1%D8%AC3-768x439.webp"},
            {name:"Chamran Park", category:"Park", description:"A popular urban park with green spaces and recreational areas.", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Chamran_park_2020-04-06_09.jpg/960px-Chamran_park_2020-04-06_09.jpg?utm_source=fa.wikipedia.org&utm_campaign=index&utm_content=thumbnail"}
        ]
    }
};

const cityBounds = {
    Tehran: { minLng: 51.0, maxLng: 51.8, minLat: 35.4, maxLat: 36.0 },
    Qazvin: { minLng: 49.8, maxLng: 50.2, minLat: 35.9, maxLat: 36.6 },
    Isfahan: { minLng: 51.5, maxLng: 52.0, minLat: 32.4, maxLat: 33.0 },
    Shiraz: { minLng: 52.4, maxLng: 52.8, minLat: 29.4, maxLat: 29.8 },
    Yazd: { minLng: 54.2, maxLng: 55.0, minLat: 31.7, maxLat: 32.2 },
    Mashhad: { minLng: 59.4, maxLng: 60.0, minLat: 36.1, maxLat: 36.4 },
    Tabriz: { minLng: 46.1, maxLng: 46.5, minLat: 38.0, maxLat: 38.2 },
    Kerman: { minLng: 56.8, maxLng: 57.4, minLat: 30.1, maxLat: 30.6 },
    BandarAbbas: { minLng: 56.1, maxLng: 56.5, minLat: 27.0, maxLat: 27.5 },
    Rasht: { minLng: 49.5, maxLng: 49.8, minLat: 37.1, maxLat: 37.5 },
    Bushehr: { minLng: 50.7, maxLng: 51.0, minLat: 28.8, maxLat: 29.2 },
    Sari: { minLng: 52.9, maxLng: 53.2, minLat: 36.4, maxLat: 36.8 },
    Karaj:{ minLng: 50.85, maxLng: 51.12, minLat: 35.74, maxLat: 35.94}
};

let currentCity = "Tehran";
let selectedFilter = "All";
let dark = localStorage.getItem("iranNomadDark") === "true";
let savedPlaces = JSON.parse(localStorage.getItem("iranNomadSavedPlaces") || "[]");

const map = new nmp_mapboxgl.Map({
    mapType: nmp_mapboxgl.Map.mapTypes.neshanVector,
    container: "map",
    zoom: 11,
    center: city[currentCity].center,
    minZoom: 2,
    maxZoom: 21,
    trackResize: true,
    mapKey: "web.1857b4c9c6364f31b7d4ecb1f79180fe",
    poi: false,
    traffic: false
});

localStorage.removeItem("iranNomadUser");

function initTheme() {
    document.body.classList.toggle("dark", dark);
    themeToggle.innerHTML = dark ? "<span>Light mode</span>" : "<span>Dark mode</span>";
    localStorage.setItem("iranNomadDark", String(dark));
}

function renderStats() {
    cityTotal.textContent = String(Object.keys(city).length);
    placeTotal.textContent = String(Object.values(city).reduce((total, destination) => total + destination.places.length, 0));
    categoryTotal.textContent = String(new Set(Object.values(city).flatMap((destination) => destination.places.map((place) => place.category))).size);
}

function renderCitySelector() {
    citySelector.innerHTML = "";

    Object.keys(city).forEach((cityName) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `city-chip${cityName === currentCity ? " active" : ""}`;
        button.textContent = cityName;
        button.addEventListener("click", () => selectCity(cityName));
        citySelector.appendChild(button);
    });
}

function renderFilters(cityName) {
    filterBar.innerHTML = "";
    const filters = ["All", ...new Set(city[cityName].places.map((place) => place.category))];

    filters.forEach((filter) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `filter-chip${filter === selectedFilter ? " active" : ""}`;
        button.textContent = filter;
        button.addEventListener("click", () => {
            selectedFilter = filter;
            renderFilters(cityName);
            renderCityCards(cityName, filter, citySearchInput.value.trim().toLowerCase());
        });
        filterBar.appendChild(button);
    });
}

function isPlaceSaved(cityName, placeName) {
    return savedPlaces.some((item) => item.city === cityName && item.name === placeName);
}

function renderCityCards(cityName, filterValue = selectedFilter, searchValue = citySearchInput.value.trim().toLowerCase()) {
    suggest.innerHTML = "";

    const filteredPlaces = city[cityName].places.filter((place) => {
        const matchesCategory = filterValue === "All" || place.category === filterValue;
        const matchesSearch = !searchValue || place.name.toLowerCase().includes(searchValue) || place.description.toLowerCase().includes(searchValue);
        return matchesCategory && matchesSearch;
    });

    if (!filteredPlaces.length) {
        suggest.innerHTML = '<div class="planner-empty">No places match this filter. Try another city or keyword.</div>';
        return;
    }

    filteredPlaces.forEach((place) => {
        const card = document.createElement("article");
        card.className = "place-card";

        const img = document.createElement("img");
        img.src = place.image;
        img.alt = place.name;

        const body = document.createElement("div");
        body.className = "card-body";

        const heading = document.createElement("h3");
        heading.textContent = place.name;

        const text = document.createElement("p");
        text.textContent = place.description;

        const saveButton = document.createElement("button");
        saveButton.type = "button";
        saveButton.className = `save-btn${isPlaceSaved(cityName, place.name) ? " saved" : ""}`;
        saveButton.textContent = isPlaceSaved(cityName, place.name) ? "Saved" : "Save trip";
        saveButton.addEventListener("click", () => {
            toggleSavedPlace(cityName, place.name);
            renderCityCards(cityName, selectedFilter, citySearchInput.value.trim().toLowerCase());
            renderPlannerList();
        });

        body.appendChild(heading);
        body.appendChild(text);
        body.appendChild(saveButton);
        card.appendChild(img);
        card.appendChild(body);
        suggest.appendChild(card);
    });
}

function updateMetaData(cityName) {
    const selected = city[cityName];
    cityRegion.textContent = selected.region;
    citySeason.textContent = `Best season: ${selected.season}`;
    cityBudget.textContent = `Budget: ${selected.budget}`;
    summaryCity.textContent = cityName;
}

function selectCity(cityName, preserveSearch = false) {
    currentCity = cityName;
    const selected = city[cityName];
    selectedFilter = "All";
    if (!preserveSearch) {
        citySearchInput.value = "";
    }

    title.textContent = `${cityName} highlights`;
    selectedCity.textContent = cityName;
    citySubtitle.textContent = selected.subtitle;
    document.documentElement.style.setProperty("--accent", selected.accent);
    updateMetaData(cityName);
    renderCitySelector();
    renderFilters(cityName);
    renderCityCards(cityName);

    if (map && map.setCenter) {
        map.setCenter(selected.center);
    }
}

function renderPlannerList() {
    plannerList.innerHTML = "";

    if (!savedPlaces.length) {
        plannerList.innerHTML = '<li class="planner-empty">No saved places yet. Save a stop to build your perfect route.</li>';
        summaryCount.textContent = "0";
        summaryTrip.textContent = "2-3 days";
        return;
    }

    savedPlaces.forEach((entry) => {
        const item = document.createElement("li");
        item.className = "planner-item";

        const info = document.createElement("div");
        const name = document.createElement("strong");
        name.textContent = entry.name;
        const cityLabel = document.createElement("small");
        cityLabel.textContent = entry.city;
        info.appendChild(name);
        info.appendChild(cityLabel);

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            toggleSavedPlace(entry.city, entry.name);
            renderPlannerList();
            renderCityCards(currentCity, selectedFilter, citySearchInput.value.trim().toLowerCase());
        });

        item.appendChild(info);
        item.appendChild(removeButton);
        plannerList.appendChild(item);
    });

    summaryCount.textContent = String(savedPlaces.length);
    summaryTrip.textContent = savedPlaces.length > 4 ? "4-5 days" : savedPlaces.length > 2 ? "3-4 days" : "2-3 days";
}

function toggleSavedPlace(cityName, placeName) {
    const existingIndex = savedPlaces.findIndex((item) => item.city === cityName && item.name === placeName);

    if (existingIndex >= 0) {
        savedPlaces.splice(existingIndex, 1);
    } else {
        savedPlaces.push({ city: cityName, name: placeName });
    }

    localStorage.setItem("iranNomadSavedPlaces", JSON.stringify(savedPlaces));
}

searchButton.addEventListener("click", () => {
    resolveSearch();
});

citySearchInput.addEventListener("input", () => {
    renderCityCards(currentCity, selectedFilter, citySearchInput.value.trim().toLowerCase());
});

citySearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        resolveSearch();
    }
});

function resolveSearch() {
    const query = citySearchInput.value.trim().toLowerCase();
    if (!query) {
        renderCityCards(currentCity, selectedFilter, "");
        return;
    }

    const matchedCity = Object.keys(city).find((cityName) => cityName.toLowerCase().includes(query));

    if (matchedCity) {
        citySearchInput.value = "";
        selectCity(matchedCity);
        return;
    }

    const matchingPlaceCity = Object.keys(city).find((cityName) =>
        city[cityName].places.some((place) =>
            place.name.toLowerCase().includes(query) || place.description.toLowerCase().includes(query)
        )
    );

    if (matchingPlaceCity && matchingPlaceCity !== currentCity) {
        selectCity(matchingPlaceCity, true);
    }

    renderCityCards(currentCity, selectedFilter, query);
}

exploreButton.addEventListener("click", () => {
    citySelector.scrollIntoView({ behavior: "smooth", block: "center" });
});

itineraryButton.addEventListener("click", () => {
    document.getElementById("planner").scrollIntoView({ behavior: "smooth", block: "start" });
});

exportRouteButton.addEventListener("click", () => {
    if (!savedPlaces.length) {
        plannerList.scrollIntoView({ behavior: "smooth", block: "center" });
        plannerList.focus({ preventScroll: true });
        plannerList.setAttribute("role", "status");
        plannerList.setAttribute("tabindex", "-1");
        plannerList.setAttribute("aria-label", "Save a place before exporting an itinerary");
        return;
    }

    const route = savedPlaces.map((entry, index) => `${index + 1}. ${entry.name} (${entry.city})`).join("\n");
    const routeFile = new Blob([`Iran Nomad trip plan\n\n${route}\n\nEstimated duration: ${summaryTrip.textContent}`], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(routeFile);
    downloadLink.download = "iran-nomad-trip-plan.txt";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    setTimeout(() => URL.revokeObjectURL(downloadLink.href), 1000);
});

themeToggle.addEventListener("click", function () {
    dark = !dark;
    document.body.classList.toggle("dark", dark);
    themeToggle.innerHTML = dark ? "<span>Light mode</span>" : "<span>Dark mode</span>";
    localStorage.setItem("iranNomadDark", String(dark));
});

map.on("click", function (event) {
    const longitude = event.lngLat.lng;
    const latitude = event.lngLat.lat;
    let cityName = null;

    Object.entries(cityBounds).forEach(([name, bounds]) => {
        if (
            longitude >= bounds.minLng &&
            longitude <= bounds.maxLng &&
            latitude >= bounds.minLat &&
            latitude <= bounds.maxLat
        ) {
            cityName = name;
        }
    });

    if (cityName) {
        selectCity(cityName);
    }
});

initTheme();
renderStats();
renderCitySelector();
renderFilters(currentCity);
renderPlannerList();
selectCity(currentCity);