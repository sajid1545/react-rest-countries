import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);

	return (
		<div>
			<h1 className="text-5xl mt-3 font-bold text-red-600">
				There are total {countries.length} countries
			</h1>

			<div className="grid grid-cols-3 gap-5">
				{countries.map((country) => (
					<Country country={country} key={country.cca3}></Country>
				))}
			</div>
		</div>
	);
};

export default Countries;
