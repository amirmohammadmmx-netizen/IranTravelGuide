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
    mapKey: "YOUR_API_KEY",
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
choise.addEventListener("click", function(event) {
    if(event.click==="تهران "){
            let p=document.createElement("p")
            p.innerHTML=`${city.Tehran}`
            suggest.appendChild(p)
    }else if(event.click==="قزوین"){
        city.Ghazvin.forEach(function(place){
            let img=document.createElement("img")
            let p=document.createElement("p")
            p.innerHTML=`${place.name}`
            img.innerHTML=`${place.image}`
            suggest.appendChild(p)
            suggest.appendChild(img)
        })
    }
});