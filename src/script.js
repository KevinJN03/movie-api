
import "./styles.css"
import tvImg from "./images/tv.png"

import search from "./images/search.png"
const icon = document.querySelector("#icon")
icon.src = search;
const input = document.querySelector("input");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

function clear() {
  let moviecontainer = document.querySelector(".movie-container");
  let oldresults = document.querySelectorAll("cardContainer");
  if (oldresults.length > 0) {
    for (let i = 0; i < oldresults.length; i++) {
      oldresults[i].remove();
    }
  }
}

async function gettingmovie() {
  clear();
  const response = await fetch(
    `https://online-movie-database.p.rapidapi.com/auto-complete?q=${input.value}`,
    options
  );
  const data = await response.json();
  const list = data.d;
  console.log(list);
  list.map((item) => {
    const name = item.l;

    let image;
    if(item.hasOwnProperty("i")){

      image = item.i.imageUrl
    }else {
      image = tvImg
    } 
    
    console.log("image: ", image);
    const rank = item.rank;
    const yearrelease = item.y;
    const type = item.q;
    // span section
    let span = document.createElement("span");
    span.classList.add("close");
    span.innerHTML = "&times;";
    // p section
    const p = document.createElement("p");
    p.innerHTML = `<li><h2>Name: ${name}</h2><h2>Rank: ${rank}</h2><h2>Year of Release: ${yearrelease}</h2><h2>Type ${type}</h2></li>`;

    const moviecontainer = document.querySelector(".movie-container");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const h2 = document.createElement("h2");
    const secondh3 = document.createElement("h3");
    const thirdh3 = document.createElement("h3");
    const img = document.createElement("img");

    const card = document.createElement("cardContainer");
    card.classList.add("card-container");
    const infoContainer = document.createElement("infocontainer");
    infoContainer.classList.add("info-container");
    const innerContainer = document.createElement("innerContainer");
    innerContainer.classList.add("inner-Container");
    img.src = image;

    innerContainer.append(img);

    h2.append(`${name}`);
    h3.append(`Type: ${type}`);
    secondh3.append(`Year Release: ${yearrelease}`);
    thirdh3.append(`Rank: ${rank}`);

    const li2 = document.createElement("li");
    li2.classList.add("secondli");
    li2.append(h3, secondh3, thirdh3);
    li.append(h2);
    ul.append(li, li2);

    infoContainer.append(ul);

    card.append(innerContainer, infoContainer);
    moviecontainer.append(card);
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  gettingmovie();
});
// const clear  = () => {
// 	const movieContainer = document.querySelectorAll(".card-container")
// 	movieContainer.remove();
// }
const main = document.querySelector("main");
const searchbtns = document.querySelector("#searchButton");
const span2 = document.querySelector("#span2");

function openwhenclicked() {
  searchbtns.onclick = function () {
    return (main.style.display = "block");
  };
}
openwhenclicked();
