let title=document.getElementById("title");
let div=document.getElementById("city");
let darkmode=document.querySelector("button");
let suggest=document.getElementById("suggestions")
let dark=false
let city={
    Tehran:[
        {
            name:"Golestan Palace",
            image:""
        },
        {
            name:"Azadi Tower",
            image:""
        },
        {
            name:"Milad Tower",
            image:""
        },
        {
            name:"Tehran Grand Bazaar",
            image:""
        },
        {
            name:"Sa'dabad Palace Complex",
            image:""
        },
        {
            name:"Niavaran palace Complex",
            image:""
        },
        {
            name:"Tajrish Bazaar",
            image:""
        },
        {
            name:"Darband",
            image:""
        },
        {
            name:"Tochal",
            image:""
        },
        {
            name:"Nature Bridge",
            image:""
        },
        {
            name:"Ab-o-Atash Park",
            image:""
        },
        {
            name:"Mellat Park",
            image:""
        },
        {
            name:"National Museum of Iran",
            image:""
        },
        {
            name:"Masoudieh Mansion",
            image:""
        },
        {
            name:"Chitgar Lake",
            image:""
        }
    ],

    Ghazvin:[
        {
            name:"Sa'd al-Saltaneh Caravanserai",
            image:""
        },
        {
            name:"Chehel Sotoun Pavilion",
            image:""
        },
        {
            name:"Qazvin Grand Bazaar",
            image:""
        },
        {
            name:"Jameh Mosque of Qazvin",
            image:""
        },
        {
            name:"Alamut Castle (outside the city)",
            image:""
        }
    ],
    Isfahan:[
        {
            name:"Naqsh-e Jahan Square",
            image:""
        },
        {
            name:"Si-o-se-pol Bridge",
            image:""
        },
        {
            name:"Khaju Bridge",
            image:""
        },
        {
            name:"Sheikh Lotfollah Mosque",
            image:""
        },
        {
            name:"Vank Cathedral",
            image:""
        },
        {
            name:"Chehel Sotoun Palace",
            image:""
        }
    ],
    Shiraz:[
        {
            name:"Persepolis",
            image:""
        },
        {
            name:"Nasir al-Mulk Mosque",
            image:""
        },
        {
            name:"Eram Garden",
            image:""
        },
        {
            name:"Hafez Tomb",
            image:""
        },
        {
            name:"Saadi Tomb",
            image:""
        },
        {
            name:"Vakil Bazaar",
            image:""
        },
        {
            name:"Karim Khan Citadel",
            image:""
        }
    ],
    Yazd:[
        {
            name:"Amir Chakhmaq Complex",
            image:""
        },
        {
            name:"Dowlat Abad Garden",
            image:""
        },
        {
            name:"Yazd Old Town",
            image:""
        },
        {
            name:"Jameh Mosque of Yazd",
            image:""
        },
        {
            name:"Zoroastrian Fire Temple",
            image:""
        },
        {
            name:"Towers of Silence",
            image:""
        }
    ]
}
let map = new nmp_mapboxgl.Map({
    mapType: nmp_mapboxgl.Map.mapTypes.neshanVector,
    container: "map",
    zoom: 11,
    center: [51.3890, 35.6892],
    minZoom: 2,
    maxZoom: 21,
    trackResize: true,
    mapKey: "web.1857b4c9c6364f31b7d4ecb1f79180fe",
    poi: false,
    traffic: false
});
darkmode.addEventListener("click",function(){
    if(dark===false){
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
        dark=true
    }else{
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
        dark=false
    }
})

map.on("click", function(event) {
    let longitude = event.lngLat.lng;
    let latitude = event.lngLat.lat;

    let cityname;
    
    if(
        longitude>=51.0 &&
        longitude<=51.8 &&
        latitude>=35.4&&
        latitude<=36.0
    ){
        cityname="Tehran"
    }
    if (cityname){
        showCity(cityname)
    }
});

function showCity(cityName){
    suggest.innerHTML="";

    city[cityName].forEach(function(place){
        let img=document.createElement("img");
        let p=document.createElement("p")
        p.innerHTML=place.name;
        img.src=place.image;
        suggest.appendChild(p)
        suggest.appendChild(img)
    });
}