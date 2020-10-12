const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = [];

// fetch will return a promise
fetch(endpoint)
    .then(blob => blob.json())
    //spread into this push method to five us proper array 
    .then(data => cities.push(...data));
