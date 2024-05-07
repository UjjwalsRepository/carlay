import axios from 'axios';
export const fetchCars=async()=>{
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '62daf8cccamshc62096f7d242834p1d144djsna1486c849c4e',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
} catch (error) {
	console.error(error);
}
}