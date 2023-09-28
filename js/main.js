





const data = 'https://restcountries.com/v3.1/all';

const newData = fetch(data).then(response => response.json()).then(data => console.log(data))

