// const fetch = require("isomorphic-fetch")
const input = document.querySelector("input");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd0571c092dmshccd2823e992f1f8p124d5fjsnc08a42f38170',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

function clear() {

	let moviecontainer = document.querySelector(".movie-container")
	let oldresults = document.querySelector("cardContainer");
  if (oldresults) {
moviecontainer.removeChild(oldresults);
}
}


	async function gettingmovie(){
		clear()
		const response = await fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${input.value}`, options)
		const data = await response.json();
		const list = data.d
		list.map((item) => {
			const name = item.l
			const image = item.i.imageUrl
			const rank = item.rank
			const yearrelease = item.y
			const type = item.q
			//modal button

			
			
			
			const modal = document.querySelector(".modal")
		const modalbtn = document.createElement("button")
			modalbtn.id = "myBtn"
			modalbtn.innerHTML = "<h2>More Info</h2>"
			//modalcontent section
			const modalcontent = document.createElement("model-content")
			modalcontent.classList.add("modal-content")
			// span section
			let span =  document.createElement("span")
			span.classList.add("close")
			span.innerHTML= "&times;"
			// p section
			const p = document.createElement("p")
			p.innerHTML = `<li><h2>Name: ${name}</h2><h2>Rank: ${rank}</h2><h2>Year of Release: ${yearrelease}</h2><h2>Type ${type}</h2></li>`
			//Modal Button Section
			
			
			
			

			
					// for each item i want to create a button that have thier info
					
			
			
			
			
			const moviecontainer = document.querySelector(".movie-container")
				const ul = document.createElement("ul")
				const li = document.createElement("li")
				const h3 = document.createElement("h3")
				const h2 = document.createElement("h2")
				const secondh3 = document.createElement("h3")
				const thirdh3 = document.createElement("h3")
				const img = document.createElement('img')

				const card = document.createElement("cardContainer")
				card.classList.add("card-container")
				const infoContainer = document.createElement("infocontainer")
			infoContainer.classList.add("info-container")
			const innerContainer = document.createElement('innerContainer')
				innerContainer.classList.add("inner-Container")
			img.src = image

				//appends
				innerContainer.append(img)
				
			    h2.append(name)
			    h3.append(type)
			    secondh3.append(yearrelease)
			    thirdh3.append(rank)
				
		    li.append(h2, h3, secondh3 ,thirdh3)
		    ul.append(li)
				
			infoContainer.append(ul)
			modalcontent.append(span, p)
			 modal.append(modalcontent)
			 infoContainer.append(modalbtn)
			 moviecontainer.append(modal)
			 console.log(modal)

			  card.append(innerContainer, infoContainer)
			moviecontainer.append(card)
			
	
		})
		}
		


const form = document.querySelector("form")

form.addEventListener("submit", async (event) => {
event.preventDefault();
	gettingmovie()
  });	

// code for 
const main = document.querySelector("main")
const searchbtns = document.querySelector("#searchButton")
const span2 = document.querySelector("#span2")

//function to display the main when the searhc button is clicked
function openwhenclicked(){
searchbtns.onclick = function(){
	return main.style.display = "block";	
}

}
openwhenclicked()