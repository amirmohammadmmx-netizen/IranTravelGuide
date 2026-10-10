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
const chLanguage=document.getElementById("change-Language");
const languageText=chLanguage.querySelector("span");
let currentlanguage="en"
const city = {
    Tehran: {
        subtitle: "Capital culture and mountain views",
        region: "Capital region",
        season: "Spring",
        budget: "$$$",
        accent: "#d97706",
        center: [51.389, 35.6892],
        places: [
            { name: "Golestan Palace",nameFa:"کاخ گلستان",category: "Historic", description: "A royal complex with Persian garden elegance and intricate tilework.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Golestan_Palace%2C_Tehran%2C_Iran_%2853760330898%29.jpg/960px-Golestan_Palace%2C_Tehran%2C_Iran_%2853760330898%29.jpg?utm_source=fa.wikipedia.org&utm_campaign=index&utm_content=thumbnail" },
            { name: "Azadi Tower",nameFa:"برج ازادی",category: "Culture", description: "A modern symbol of Tehran and one of the city’s most iconic landmarks.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkvmTrnbEM816Zav0aYPWjhFlcfaOl03NuygBBMcGVQ&s=10" },
            { name: "Milad Tower",nameFa:"برج میلاد",category: "Scenic", description: "An iconic skyline landmark offering panoramic views over Tehran.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSBWPjD8yJ1gfHAzNApskgHUKj7d17bIqxU8RQBAMmg&s" },
            { name: "Tehran Grand Bazaar",nameFa:"بازار بزرگ تهران ", category: "Market", description: "A maze of traditional shops, spices, carpets, and Persian charm.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDq7LaHwp7s3zqIgG9hQ1lHS3ACH3eDD_aHDJj9zAsWA&s=10" },
            { name: "Sa'dabad Palace",nameFa:"کاخ سعد اباد",category: "Historic", description: "A beautiful historical palace complex with lush gardens.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0L8LumBPxzbliDXo57h1Io_munMd5nZrGiX1_8w4Stg&s=10" },
            { name: "Niavaran Palace",nameFa:"کاخ نیاوران",category: "Culture", description: "A lavish royal residence known for its architecture and history.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPIKLFurVeZP700DlsmspOaUAxF5ct-4EzY5GFn9K-w&s=10"}
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
            { name: "Sa'd al-Saltaneh Caravanserai",nameFa:"کاروانسرای سعدالسلطنه",category: "Historic", description: "A classic stop on Iran’s caravan routes and a historic wonder.", image: "https://images.openai.com/static-rsc-4/mz4QBguh-uXFBUAHNtKWiGdefuyCPs-zbal6QiYeNIgzxoYjhEvsTLbI7VQIxbrNTcnZxm-62nbZzxbgB4wGlCmy8iDSYVDtvX86br5nHJD4HjiLFbnxgxoSbqcjFkrAHTJfDaMZIo0ddlS0xYNtvjQfjglxYkSDS4jhMHATbY926GvByUxIRbo2fRYINPN6?purpose=fullsize" },
            { name: "Chehel Sotoun Pavilion",nameFa:"عمارت چهل‌ستون قزوین",category: "Historic", description: "A splendid pavilion rich in Persian cultural heritage.", image: "https://images.openai.com/static-rsc-4/Ufid_CAMfk9-Sk3vKP9hZrM174shWo6rxw-82fcIZxu8o1dDoOJnOjGI4_-VYixq7WoPdKp1eoI91Xxwm5rUq2CSaY9ATMG9Gai1liix0gC4aFJO0JEn3HcUHOHT22npNqIL4cqaNMKGDryB9MFM26-h7QKbH_YPSdsPUzgf4Q8Yjrey2CAjEfDPo3Vo14-H?purpose=fullsize" },
            { name: "Qazvin Bazaar",nameFa:"بازار قزوین",category: "Market", description: "A vibrant local bazaar filled with atmosphere and crafts.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLtyjFQjmDpnOYF5QYDgwrcIlYRWu9uxKKFMsJLy8SQ&s=10" },
            { name: "Jameh Mosque",nameFa:"مسجد جامع",category: "Historic", description: "A graceful architectural gem with centuries of history.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStteg808mfHrx5LLWEUV1GMD8f9X0znlMbHCKa4exXdQuWYTBSD7xoW7OH&s=10" },
            { name: "Alamut Castle",nameFa:"قلعه الموت ",category: "Adventure", description: "A dramatic mountain fortress and legendary historical site.", image: "https://cdn.borna.news/servev2/CEVQou59jEAA/KxuoffTghAA,/%D8%A7%D9%84%D9%85%D9%88%D8%AA+%DB%B6.jpg" }
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
            { name: "Naqsh-e Jahan Square",nameFa:"میدان نقش جهان",category: "Historic", description: "One of the largest historic city squares in the world.", image: "https://www.alibaba.ir/mag/wp-content/uploads/2022/02/irantravelingcenter-3.jpg" },
            { name: "Si-o-se-pol Bridge",nameFa:"پل سی و سه پل",category: "Scenic", description: "A legendary bridge that captures the beauty of Isfahan.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5BUS2MqoSc6XiXhaXD9yKqonle34ehlcx_b-WUqAQW1eSyXQdsfL5aFO&s=10" },
            { name: "Khaju Bridge",nameFa:"پل خواجو",category: "Scenic", description: "A historic urban bridge with beautiful reflections at night.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Khaju-bridge-isfahan.jpg/250px-Khaju-bridge-isfahan.jpg?utm_source=fa.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
            { name: "Sheikh Lotfollah Mosque",nameFa:"مسجد شیخ لطف الله" ,category: "Historic", description: "Famous for its dazzling architecture and peaceful atmosphere.", image: "https://www.vilajar.com/Dashboard/GetArticleImage/13830" },
            { name: "Vank Cathedral",nameFa:"کلیسا ونک",category: "Culture", description: "An iconic Armenian church with extraordinary art and design.", image: "https://upload.wikimedia.org/wikipedia/commons/7/78/%DA%A9%D9%84%DB%8C%D8%B3%D8%A7%DB%8C_%D9%88%D8%A7%D9%86%DA%A9._%D8%B9%DA%A9%D8%B3_Rasool_AB.JPG?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
            { name: "Chehel Sotoun Palace",nameFa:"کاخ چهل ستون",category: "Historic", description: "A historic palace with beautiful gardens and courtyards.", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Chehel_Sotoon.jpg?utm_source=fa.wikipedia.org&utm_campaign=index&utm_content=original" }
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
            { name: "Persepolis",nameFa:"پرسپولیس",category: "Historic", description: "One of the most legendary archaeological sites in the world.", image: "https://cdn.alibaba.ir/ostorage-ugc/randd-threepio/91139d8f098f242021b658bac6f1d9e3b87cd2ad101d7ab291d6c15de9ac216c_original.jpg" },
            { name: "Nasir al-Mulk Mosque",nameFa:"مسجد نصیرالملک",category: "Culture", description: "A masterpiece of light, color, and elegance in Shiraz.", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/%D9%86%D9%85%D8%A7%DB%8C_%DA%A9%D9%84%DB%8C_%D9%85%D8%B3%D8%AC%D8%AF.jpg?utm_source=fa.wikipedia.org&utm_campaign=index&utm_content=original" },
            { name: "Eram Garden",nameFa:"باغ ارم",category: "Nature", description: "A serene and beautiful garden with elegant Persian design.", image: "https://safarmarket.com/blog/data/uploaded_files/04abe1da6cb65600fd2a3075.jpg" },
            { name: "Hafez Tomb",nameFa:"ارامگاه حافظ",category: "Culture", description: "A peaceful literary destination dedicated to Persia’s beloved poet.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1DTf6czEMg-0IU5Vj7FqnnAIxiQGurEjUd4cEs3d-M6Tm2Plf7tWiU4&s=10" },
            { name: "Vakil Bazaar",nameFa:"بازار وکیلی",category: "Market", description: "A bustling bazaar rooted in Shiraz’s historic commercial life.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Bazaar_de_Vakil%2C_Shiraz%2C_Ir%C3%A1n%2C_2016-09-24%2C_DD_48.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
            { name: "Karim Khan Citadel",nameFa:"ارگ کریم خان",category: "Historic", description: "A striking historic fortress in the heart of the city.", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Arg.karimkhan.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" }
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
            { name: "Dowlat Abad Garden",nameFa:"باغ دولت اباد",category: "Nature", description: "A UNESCO-listed Persian garden famous for its towering windcatchers.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyS5oH03ojTLxjIFoZfFj9aOcqNWQqGiCn8Inlr-m3vg&s=10" },
            { name: "Yazd Old Town",nameFa:"شهر قدیمی یزد",category: "Historic", description: "A maze of winding lanes, courtyards, and traditional houses.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSD2umNaGgq1we3x3yjQCDvgVFXtW8u33VD6kUFCi4-8JAXVJABWbOKXo&s=10" },
            { name: "Jameh Mosque",nameFa:"مسجد جامع",category: "Historic", description: "A grand example of Islamic architecture in the desert city.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBh68Nr7cNCQhsKyIsOrVSgOFo2WZTv_UXSvWFZd9aQ&s=10" },
            { name: "Zoroastrian Fire Temple",nameFa:"آتشکده زرتشتیان",category: "Culture", description: "A meaningful spiritual site tied to ancient Persian faith.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Zoroastrian_Fire_Temple_in_Yazd.JPG?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
            { name: "Towers of Silence",nameFa:"برج خاموشان",category: "Culture", description: "A unique historical site with desert views and mystic atmosphere.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_YgMbyZ09fnM1qeTDpw6BLFupzPCAOLmEZwbAAA45BLYAYYoPvu2d_k&s=10" },
            { name: "Amir Chakhmaq Complex",nameFa:"مجموعه میدان امیر چخماق",category: "Historic", description: "Known for its beautiful architecture and lively public square.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KVCfQMV7OeDaeDsszTclJ5lwJdRJ4S48pkPKkD-icw&s=10" }
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
            { name: "Imam Reza Shrine",nameFa:"زیارتگاه امام رضا",category: "Historic", description: "A major spiritual site and one of Iran’s most respected landmarks.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8acmxvUl4PhTE4Klq8Nk34y6YUnGJ5QYaX3MsLa4YtA&s=10" },
            { name: "Astan Quds Museum",nameFa:"موزه آستان قدس",category: "Culture", description: "A rich collection of history, art, and sacred heritage.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Centeral_museum.jpg/330px-Centeral_museum.jpg?utm_source=fa.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
            { name: "Gonbad Sabz",nameFa:"گنبد سبز",category: "Historic", description: "An elegant historic monument admired for its green tilework.", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80" },
            { name: "Koohsangi Park",nameFa:"پارک کوه سنگی",category: "Nature", description: "A scenic park for relaxed strolls and family outings.", image: "https://www.alibaba.ir/mag/wp-content/uploads/2021/02/Untitled-2.jpg" }
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
            { name: "Blue Mosque",nameFa:"مسجد ابی",category: "Historic", description: "A masterpiece of tilework and Persian architecture.", image: "https://www.eghamat24.com/blog/wp-content/uploads/2022/08/Tabriz-Blue-Mosque.webp" },
            { name: "Tabriz Grand Bazaar",nameFa:"بازار بزرگ تبریز",category: "Market", description: "One of the world’s oldest and busiest covered markets.", image: "https://static.neshanmap.ir/places/images/205/602289_1837614_Thumbnail.jpeg" },
            { name: "El Goli Park",nameFa:"پارک ائل گلی",category: "Nature", description: "A pleasant city park known for scenic walks and evening views.", image: "https://static.neshanmap.ir/places/images/8df/1642675_6778445_Thumbnail.jpeg" },
            { name: "Azerbaijan Museum",nameFa:"موزه اذربایجان",category: "Culture", description: "A great place to learn about the region’s heritage and art.", image: "https://www.eghamat24.com/blog/wp-content/webp-express/webp-images/doc-root/blog/wp-content/uploads/2023/05/2.jpg.webp" }
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
            { name: "Arg-e Bam",nameFa:"بام ارگ",category: "Historic", description: "A magnificent ancient citadel and UNESCO monument.", image: "https://www.eghamat24.com/blog/wp-content/webp-express/webp-images/doc-root/blog/wp-content/uploads/2017/05/Arg-e-Bam-4.jpg.webp" },
            { name: "Mahan Garden",nameFa:"باغ ماهان",category: "Nature", description: "A beautiful and tranquil destination with Persian charm.", image: "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2021/10/mahan-shahzade.jpg" },
            { name: "Kerman Bazaar",nameFa:"بازار کرمان",category: "Market", description: "A lively traditional bazaar with local goods and history.", image: "https://nasimsaba.ir/wp-content/uploads/2023/01/01.jpg" }
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
            { name: "Lengeh Beach",nameFa:"بندر لنگه",category: "Nature", description: "A coastal escape with mesmerizing sea views.", image: "https://safarmarket.com/blog/data/uploaded_files/e8e709576740184fceddc08e.jpg" },
            { name: "Hormuz Island",nameFa:"جزیره هرمز",category: "Adventure", description: "A colorful volcanic island with unusual landscapes.", image: "https://safarmarket.com/blog/data/uploaded_files/e5d741377ed1d775882be255.jpg" },
            { name: "Port of Bandar Abbas",nameFa:"اسکله بندر عباس",category: "Scenic", description: "A vibrant maritime hub with Persian Gulf atmosphere.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYI4q1NPKL0M1abTSNUMI0KdJTUhB02rTZHzL6fqIYHBsNRGg8fP7_Gk&s=10" }
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
            { name: "Sefidroud Forests",nameFa:"جنگل سفید رود",category: "Nature", description: "Beautiful natural scenery and lush green landscapes.", image: "https://files.namnak.com/users/sr/aup/201612/1265_pics/%D8%B3%D9%81%DB%8C%D8%AF%D8%B1%D9%88%D8%AF.webp" },
            { name: "Gilan Museum",nameFa:"موزه گیلان",category: "Culture", description: "A window into the unique cultural identity of northern Iran.", image: "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2024/09/11110.jpg" },
            { name: "Rasht Bazaar",nameFa:"بازار رشت",category: "Market", description: "A relaxed local market with fresh produce and culture.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1_%D8%B1%D8%B4%D8%AA.jpg/250px-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1_%D8%B1%D8%B4%D8%AA.jpg?utm_source=fa.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" }
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
            { name: "Bushehr Port",nameFa:"اسکله بوشهر",category: "Scenic", description: "A coastal city known for its harbor and sea views.", image: "https://cdn.balad.ir/crowd-images/all/original/PkveCSggtrabzw-841b306c5fca40cdacc0d440dce35a34.jpg?x-img=v1/crop,x_0,y_60,w_1116,h_627/autorotate" },
            { name: "Old Bushehr",nameFa:"بوشهر قدیم",category: "Historic", description: "Historic architecture and an authentic maritime character.", image: "https://mrbilit.com/mag/wp-content/uploads/2020/08/9ba.jpg" },
            { name: "Hendijan Coast",nameFa:"ساحل هندیجان",category: "Nature", description: "A peaceful seaside experience with warm weather and waves.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMg1dMKd0_Qy8eYJJ1kratQmGBL1Bc0-6f7dJ9ygB1A&s=10" }
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
            { name: "Gorgan Bay",nameFa:"خلیج گرگان",category: "Nature", description: "A scenic area known for coastal and natural beauty.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Gulf_of_Gorgan_20160619_26.jpg/250px-Gulf_of_Gorgan_20160619_26.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
            { name: "Sari Bazaar",nameFa:"بازار ساری",category: "Market", description: "An authentic city market with local flavors and crafts.", image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Sari_bazar_10.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
            { name: "Mazandaran Nature",nameFa:"جنگل مازندران",category: "Nature", description: "A refreshing northern landscape with green hills and forests.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f0/c6/cd/oben-waterfalls.jpg?w=700&h=400&s=1" }
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
            {name:"Shah Abbasi Caravanserai",nameFa:"کاروانسرای شاه عباسی",category:"Historic", description:"A historic Safavid-era caravanserai in the heart of Karaj.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Farasfaj_caravanserai_20190507_17.jpg/330px-Farasfaj_caravanserai_20190507_17.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"},
            {name:"Morvarid Palace",nameFa:"کاخ مروارید",category:"Historic", description:"A unique palace in Mehrshahr known for its distinctive architecture.", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Pearl_Palace_-Kakh_e_Morvarid-_Karaj_Iran.jpg/330px-Pearl_Palace_-Kakh_e_Morvarid-_Karaj_Iran.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"},
            {name:"Bam-e Karaj",nameFa:"بام کرج",category:"Nature", description:"A scenic viewpoint offering panoramic views of Karaj and the surrounding mountains.", image:"https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format=webp,w=720/QwRY54Li1HMwD7oNfofxOHiJ2KKUgWiNqbSYVegww4"},
            {name:"Fateh Garden",nameFa:"باغ فاتح",category:"Park", description:"A peaceful green space in Karaj, perfect for walking and relaxing.", image:"https://seeiran.ir/en/wp-content/uploads/2026/09/%D8%A8%D8%A7%D8%BA-%D9%81%D8%A7%D8%AA%D8%AD-%DA%A9%D8%B1%D8%AC3-768x439.webp"},
            {name:"Chamran Park",nameFa:"پارک چمران",category:"Park", description:"A popular urban park with green spaces and recreational areas.", image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Chamran_park_2020-04-06_09.jpg/960px-Chamran_park_2020-04-06_09.jpg?utm_source=fa.wikipedia.org&utm_campaign=index&utm_content=thumbnail"}
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

const translation={
    en:{
        name:"Iran Nomad",
        n:"travel guide",
        title:"Explore Iran",
        search:"Search",
        planner:"Planner",
        languageButton:"Change Language to Persian",
        discover:"Discover",
        map:"Map",
        insights:"Insights",
        themeToggleDark:"Dark mode",
        themeToggleLight:"Light mode",
        selectedCity:"Selected city",
        Tehran:"Tehran",
        Qazvin:"Qazvin",
        Isfahan:"Isfahan",
        Shiraz:"Shiraz",
        Yazd:"Yazd",
        Mashhad:"Mashhad",
        Tabriz:"Tabriz",
        Kerman:"Kerman",
        BandarAbbas:"BandarAbbas",
        Rasht:"Rasht",
        Bushehr:"Bushehr",
        Sari:"Sari",
        Karaj:"Karaj",
        searchbtn:"Search",
        searchbox:"Search destination, landmark, or vibe...",
        highlights:"highlights",
        All: "All",
        Historic: "Historic",
        Culture: "Culture",
        Scenic: "Scenic",
        Market: "Market",
        Adventure: "Adventure",
        Nature: "Nature",
        Park: "Park",
        citySeason:"citySeason",
        cityBudget:"cityBudget",
        Start:"Start exploring",
        View:"View itineraries",
        citi:"Cities",
        land:"Landmarks",
        Travel:"Travel styles",
        text:"Explore the soul of Iran",
        p:"Journey through culture, desert, mountains and hospitality.",
        t:"Discover unforgettable places, plan your route, and build a personal travel experience across Iran’s most beautiful cities.",
        c:"Popular cities",
        destination:"Choose your destination",
        selected:"Selected city",
        Local:"Local favorites",
        Capital:"Capital region",
        trip:"Trip builder",
        des:"Destination",
        saved:"Saved spots",
        Estimated:"Estimated trip",
        Export:"Export itinerary",
        summary:"Travel summary",
        save:"Your saved places",
        route:"Plan your route"
    },
    fa:{
        name:"ایران نُومَد",
        n:"راهنمای سفر",
        title:"ایران را کشف کنید",
        search:"جستجو",
        planner:"برنامه‌ریز",
        languageButton:"تغییر زبان به انگلیسی ",
        map:"نقشه",
        discover:"کشف کن",
        insights:"بینش‌ها",
        themeToggleDark:"حالت تیره",
        themeToggleLight:"حالت روشن",
        selectedCity:"شهر انتخاب شده",
        Tehran:"تهران",
        Qazvin:"قزوین",
        Isfahan:"اصفهان",
        Shiraz:"شیراز",
        Yazd:"یزد",
        Mashhad:"مشهد",
        Tabriz:"تبریز",
        Kerman:"کرمان",
        BandarAbbas:"بندر عباس",
        Rasht:"رشت",
        Bushehr:"بوشهر",
        Sari:"ساری",
        Karaj:"کرج",
        searchbtn:"جستجو",
        searchbox:"جستجوی مقصد، مکان دیدنی یا حال‌وهوای سفر...",
        highlights:"جاذبه های گردشگری",
        All: "همه",
        Historic: "تاریخی",
        Culture: "فرهنگی",
        Scenic: "دیدنی",
        Market: "بازار",
        Adventure: "ماجراجویی",
        Nature: "طبیعت",
        Park: "پارک",
        citySeason:"فصل شهر",
        cityBudget:"هزینه شهر",
        Start:"شروع کاوش",
        View:"دیدن برنامه های سفر",
        citi:"شهرها",
        land:"نشانه‌های شاخص",
        Travel:"سبک های سفر",
        text:"روح ایران را کشف کنید",
        p:"سفری در میان فرهنگ، کویر، کوهستان و مهمان‌نوازی",
        t:"مکان‌های فراموش‌نشدنی را کشف کنید، برای مسیر خود برنامه‌ریزی کنید و تجربه‌ای شخصی از سفر در زیباترین شهرهای ایران برای خود رقم بزنید.",
        c:"شهرهای محبوب",
        destination:"مقصد مورد نظر انتخاب کنید",
        selected:"شهر انتخاب شده",
        Local:"مکان های مورد علاقه",
        Capital:"پایتخت محدوده",
        trip:"برنامه ریز سفر",
        des:"مقصد",
        saved:"جاهای ذخیره شده",
        Estimated:"سفر براورده شده",
        Export:"خروجی برنامه سفر",
        summary:"خلاصه سفر",
        save:"مکان های ذخیره شده شما",
        route:"برنامه ریزی مسیر شما"
    }
}

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

function updateThemeText(){
    const key= dark ? "themeToggleLight" : "themeToggleDark";
    themeToggle.innerHTML=`<span>${translation[currentlanguage][key]}</span>`
}


function initTheme() {
    document.body.classList.toggle("dark", dark);
    updateThemeText();
    localStorage.setItem("iranNomadDark", String(dark));
}

function renderStats() {
    cityTotal.textContent = String(Object.keys(city).length);
    placeTotal.textContent = String(Object.values(city).reduce((total, destination) => total + destination.places.length, 0));
    categoryTotal.textContent = String(new Set(Object.values(city).flatMap((destination) => destination.places.map((place) => place.category))).size);
}


const savedlanguage=localStorage.getItem("iranNomadLanguage");
if(savedlanguage==="fa" || savedlanguage==="en"){
    currentlanguage=savedlanguage;
}

function changelanguage() {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.dataset.i18n;
        const text = translation[currentlanguage][key];

        if (text !== undefined) {
            element.textContent = text;
        }
    });

    const inputs = document.querySelectorAll("[data-i18n-placeholder]");

    inputs.forEach(input => {
        const key = input.dataset.i18nPlaceholder;
        const text = translation[currentlanguage][key];

        if (text !== undefined) {
            input.placeholder = text;
        }
    });

    document.documentElement.lang = currentlanguage;
    document.documentElement.dir =
        currentlanguage === "fa" ? "rtl" : "ltr";
        localStorage.setItem("iranNomadLanguage",currentlanguage);
    languageText.textContent =
        translation[currentlanguage].languageButton;
    
    


    updateThemeText()
    
}





function renderCitySelector() {
    citySelector.innerHTML = "";

    Object.keys(city).forEach((cityName) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `city-chip${cityName === currentCity ? " active" : ""}`;
        button.textContent = translation[currentlanguage][cityName] ?? cityName;
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
        button.textContent = translation[currentlanguage][filter] ?? filter;
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
        const matchesSearch = !searchValue || place.name.toLowerCase().includes(searchValue) || (place.nameFa && place.nameFa.includes(searchValue)) || place.description.toLowerCase().includes(searchValue);
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
    summaryCity.textContent = translation[currentlanguage][cityName];
}


function selectCity(cityName, preserveSearch = false) {
    currentCity = cityName;
    const selected = city[cityName];
    selectedFilter = "All";
    if (!preserveSearch) {
        citySearchInput.value = "";
    }

    title.textContent = `${translation[currentlanguage][cityName]} ${translation[currentlanguage].highlights} `;
    selectedCity.textContent = translation[currentlanguage].selectedCity + ": " + translation[currentlanguage][cityName];
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
        cityLabel.textContent = translation[currentlanguage][entry.city] ?? entry.city;
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

    const matchedCity = Object.keys(city).find((cityName) => cityName.toLowerCase().includes(query) || translation.fa[cityName].includes(query)) 

    if (matchedCity) {
        citySearchInput.value = "";
        selectCity(matchedCity);
        return;
    }

    const matchingPlaceCity = Object.keys(city).find((cityName) =>
        city[cityName].places.some((place) =>
            place.name.toLowerCase().includes(query) || (place.nameFa && place.nameFa.includes(query)) || place.description.toLowerCase().includes(query)
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
    updateThemeText()
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

chLanguage.addEventListener("click",function(){
    currentlanguage=currentlanguage==="en" ? "fa" : "en";
    changelanguage()
    selectCity(currentCity, true)
})


initTheme();
renderStats();
changelanguage();
renderCitySelector();
renderFilters(currentCity);
renderPlannerList();
selectCity(currentCity);