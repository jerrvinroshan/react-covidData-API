import { useState } from 'react';
import { fetchCovidData } from '../services/covidAPI';

export const useCovidData = () => {
    const [data, setData] =useState(null);

    const fetchData = async () => {
        const country = document.getElementById('countryInput').value;
        // let storedData = JSON.parse(sessionStorage.getItem('covidData')) || {};

        // if (storedData[country]) {
        //     console.log('Data fetched from sessionStorage:', storedData[country]);
        //     setData(storedData[country]);
        //     return
        // }

        const results = await fetchCovidData(country);
        if(results){
            // storedData[country] = results;
            // sessionStorage.setItem('covidData', JSON.stringify(storedData));
            setData(results);
        }
    };
    return{ data, fetchData };
}