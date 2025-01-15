const form = document.querySelector("#form");
const field = document.querySelector("#field");

const wrapper = document.getElementById("wrapper");
const img = document.getElementById("img");
const right = document.getElementById("right");
const left = document.getElementById("left");

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (error) {
    return false;
  }
}

form && form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isValid = isValidUrl(field.value);
    if (!isValid) {
      alert("Please enter a URL!");
      return;
    }
    let images = [];
    if (localStorage.getItem("images")) {
      images = JSON.parse(localStorage.getItem("images"));
    }
    if(images.includes(field.value)){
      alert("Usgbu rasm mavjud")
      return;
    }
    images.push(field.value);
    localStorage.setItem("images", JSON.stringify(images));
    from.reset();
  });

document.addEventListener("DOMContentLoaded", function () {
  let images = [];
  if (localStorage.getItem("images")) {
    images = JSON.parse(localStorage.getItem("images"));
  }

  if (images.length == 0) {
    wrapper.innerHTML = "Images not found";
    return;
  }

  img.setAttribute("src", images[0]);
  img.setAttribute("data-id", 0);
});

right && right.addEventListener("click", function () {
    let images = [];

    if (localStorage.getItem("images")) {
      images = JSON.parse(localStorage.getItem("images"));
    }

    let currentId = img.getAttribute("data-id");
    if (currentId == images.length - 1) {
      img.setAttribute("src", images[0]);
      img.setAttribute("data-id", 0);
    } else {
      img.setAttribute("src", images[Number(currentId) + 1]);
      img.setAttribute("data-id", Number(currentId) + 1);
    }
  });

left && left.addEventListener("click", function () {
    let images = [];

    if (localStorage.getItem("images")) {
      images = JSON.parse(localStorage.getItem("images"));
    }

    let currentId = img.getAttribute("data-id");
    if (currentId == 0) {
      img.setAttribute("src", images[images.length - 1]);
      img.setAttribute("data-id", images.length - 1);
    } else {
      img.setAttribute("src", images[Number(currentId) - 1]);
      img.setAttribute("data-id", Number(currentId) - 1);
    }
  });

//1. Mashq: Barcha postlarni olish
//API: https://jsonplaceholder.typicode.com/posts
// Vazifa: Ushbu API orqali barcha postlarni olish va har bir postning title va body qismini konsolga chiqarish.
// document.addEventListener('DOMContentLoaded',function(){
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET"
//   })
//   .then(function(response){
//     if(response.ok){
//       return response.json()
//     }
//   })
//   .then(function(data){
//     data.forEach(function(post){
//       console.log(`Title: ${post.title}`);
//       console.log(`Body: ${post.body}`);
//     })
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// })

// //=================================================================
// //2. Mashq: Random user ma'lumotlarini olish
// //API: https://randomuser.me/api/
// //Vazifa: API orqali bitta random foydalanuvchining ismi, emaili va manzilini (address) konsolga chiqarish.
// document.addEventListener('DOMContentLoaded',function(){
//   fetch("https://randomuser.me/api/",{
//     method: "GET"
//   })
//   .then(function(response){
//     if(response.ok){
//       return response.json()
//     }
//   })
//   .then(function(post){
//     const user = post.results[0];
//     console.log(`Name: ${user.name.first}`);
//     console.log(`Name: ${user.name.last}`);
//     console.log(`Name: ${user.location.city}`);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// })

// //2-Mashq: Dunyo bo'ylab COVID-19 statistikasi
// // API: https://disease.sh/v3/covid-19/all
// // Vazifa: API orqali dunyo bo'yicha COVID-19 statistik ma'lumotlarini olish va quyidagi ma'lumotlarni konsolga chiqarish:
// // Jami kasallanganlar (cases)
// // Jami vafot etganlar (deaths)
// // Jami tuzalganlar (recovered)
// document.addEventListener('DOMContentLoaded',function(){
//   fetch("https://disease.sh/v3/covid-19/all" ,{
//     method: "GET"
//   })
//   .then(function(response){
//     if(response.status==200){
//       return response.json()
//     }
//   })
//   .then(function(datta){
//     const covid=datta;
//       console.log(`Jami kasallanganlar: ${covid.cases}`);
//       console.log(`Jami vafot etganlar: ${covid.deaths}`);
//       console.log(`Jami tuzalganlar: ${covid.recovered}`);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// })

// //4. Mashq: Bitcoin narxi
// // API: https://api.coindesk.com/v1/bpi/currentprice.json
// // Vazifa: Bitcoinning joriy USD narxini (rate) olish va konsolga chiqarish.
// document.addEventListener('DOMContentLoaded',function(){
//   fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
//     method: "GET",
//   })
//     .then(function (response) {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .then(function (dataa) {
//       const price = dataa;
//       console.log(`Joriy narxi: ${price.bpi.USD.rate}`);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// })

// //5-Mashq: Havo harorati haqida ma'lumot
// // API: https://goweather.herokuapp.com/weather/{city}
// // Vazifa: Shahar nomi (city) parametrini API'ga berib, o'sha shahardagi hozirgi haroratni (temperature) konsolga chiqarish.
// // Misol: https://goweather.herokuapp.com/weather/Tashkent

// document.addEventListener('DOMContentLoaded',function(){
//   const city="Fergana"
//   fetch(`https://goweather.herokuapp.com/weather/ ${city}`,{
//     method: "GET"
//   })
//   .then(function(response){
//     if(response.ok){
//       return response.json()
//     }
//   })
//   .then(function(dataaa){
//     console.log(`Hozirgi harorat ${dataaa.temperature}`);
//   })
//   .catch(function(error){
//     console.log(error);
//   })
// })
