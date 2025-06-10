//! Powered By Deniz Sevinç

const input = document.querySelector(".input");
const button = document.querySelector(".search");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let value = input.value;
  getData(value);
  input.value = "";
});

function getData(name) {
  const API = "b382a204ff2ef6cbe0587c273061219e";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const {
        name,
        sys: { country },
        main: { temp, feels_like },
        weather: [{ description }],
      } = data;

      const city = (document.querySelector(".name").textContent = name);
      const cityCT = (document.querySelector(".country").textContent = country);
      const tempature = (document.querySelector(".temp-text").textContent =
        Math.floor(temp) + "°C");
      const feels = (document.querySelector(".feels-like-span").textContent =
        Math.floor(feels_like) + "°C");
      const desc = (document.querySelector(".desc").textContent = description);
      //? weather change image
      const img = document.querySelector(".weather-img");
      //! Olasılıklar:
      imgChange(img, desc);
      //!input olayları
      input.style.borderBottom = "3px solid green";
    })
    .catch((err) => {
      console.warn(err);
      input.style.borderBottom = "3px solid red";
    });
}

function imgChange(change, dsc) {
  switch (dsc) {
    case "açık":
      change.src = "img/acik.png";
      break;

    //? Clouds Data
    case "kapalı":
      change.src = "img/kapali.png";
      break;
    case "kapalı bulutlu":
      change.src = "img/kapali.png";
      break;
    case "dağınık bulutlar":
      change.src = "img/bulutlu.png";
      break;
    case "parçalı bulutlu":
      change.src = "img/bulutlu.png";
      break;
    case "az bulutlu":
      change.src = "img/kapali.png";
      break;
    case "parçalı az bulutlu":
      change.src = "img/bulutlu.png";
      break;

    //? Rainy Data
    case "yağmur":
      change.src = "img/yagmurlu.png";
      break;
    case "yağmurlu":
      change.src = "img/yagmurlu.png";
      break;
    case "hafif yağmur":
      change.src = "img/yagmurlu.png";
      break;
    case "orta şiddetli yağmur":
      change.src = "img/ortayagmur.png";
      break;
    case "şiddetli yağmur":
      change.src = "img/siddetli.png";
      break;
    case "hafif sağanak yağmur":
      change.src = "img/yagmurlu.png";
      break;
    case "sağanak yağmur":
      change.src = "img/yagmurlu.png";
      break;
    case "şiddetli sağanak yağmur":
      change.src = "img/siddetli.png";
      break;
    case "dağınık sağanak yağmur":
      change.src = "img/siddetli.png";
      break;
    case "kısa süreli yağmur":
      change.src = "img/yagmurlu.png";
      break;

    //? Drizzle Data
    case "çiseleme":
      change.src = "img/drizzle.png";
      break;

    //? Thunderstorm Data
    case "hafif fırtına":
      change.src = "img/firtina.png";
      break;
    case "fırtına":
      change.src = "img/firtina.png";
      break;
    case "şiddetli fırtına":
      change.src = "img/firtina.png";
      break;
    case "dağınık sağanak yağmur":
      change.src = "img/firtina.png";
      break;

    //? Snow Data
    case "kar":
      change.src = "img/karli.png";
      break;
    case "karlı":
      change.src = "img/karli.png";
      break;
    case "hafif kar":
      change.src = "img/karli.png";
      break;

    case "hafif kar yağışlı":
      change.src = "img/karli.png";
      break;
    case "sulu kar":
      change.src = "img/hafifkar.png";
      break;

    //? Atmosphere Data
    case "sisli":
      change.src = "img/sis.png";
      break;
    case "hafif sisli":
      change.src = "img/sis.png";
      break;
    case "kumlu":
      change.src = "img/duman.png";
      break;
    case "kum":
      change.src = "img/duman.png";
      break;
    case "hortum":
      change.src = "img/tornado.png";
      break;
    case "pus":
      change.src = "img/pus.png";
      break;

    default:
      change.src = "img/meteorology.png";
      console.warn("imgChange fonksiyonudna bir hata oluştu!");
      break;
  }
}
