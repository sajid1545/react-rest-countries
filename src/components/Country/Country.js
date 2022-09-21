import React from 'react';

const Country = (props) => {
	const { name, flags, population, area, region } = props.country;
	return (
		<div className="border-2 border-black m-4 p-4 space-y-4  text-xl font-medium shadow-xl shadow-gray-500 rounded-xl mt-10 hover:shadow-2xl hover:shadow-red-600 hover:duration-700 hover:scale-105 duration-500 hover:bg-gray-300">
			<h1 className="text-3xl italic">Country Name : {name.common}</h1>
			<img src={flags.png} className="w-[150px] mx-auto" alt="" />
			<h1>Popullation : {population}</h1>
			<h1>Area : {area}</h1>
			<h1>Region: {region}</h1>
		</div>
	);
};

export default Country;
