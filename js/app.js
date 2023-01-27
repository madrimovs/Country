const elInput = document.querySelector("#input");
const elCard = document.querySelector(".card");

function findElement(element, parent = elCard) {
	return parent.querySelector(element);
}

const title = findElement(".card-title");
const capital = findElement("#capital");
const flag = findElement("#flag");
const population = findElement("#population");
const region = findElement("#region");
const weather = findElement("#weather");

elInput.addEventListener("input", (evt) => {
	const value = evt.target.value;

	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=46351da790226c653537b9628dc20463`
	)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			weather.textContent = "Weather: " + data.main.feels_like;
		});
	function findState() {
		fetch(`https://restcountries.com/v3.1/name/${value}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				title.textContent = data[0].name.common;
				capital.textContent = "Capital: " + data[0].capital;
				population.textContent = "Population: " + data[0].population;
				region.textContent = "Continent: " + data[0].subregion;
			});
	}
	findState();
});
