const box = document.querySelector('.box')


const API = 'https://restcountries.com/v3.1/all';

const newData = fetch(API).
    then(response => response.json()).
    then((data) => {
        data.map((country) =>{
            console.log(country);
            box.innerHTML += `
            <div class="card card1">
                <img class="flag-img" src=${country.flags.png} alt="img">
                <p class="title"><span class="bolder-text">Country:</span> ${country.name.common}</p>
                <p class="capital"><span class="bolder-text">Capital:</span> ${country.capital}</p>
                <p class="population"><span class="bolder-text">Population:</span> ${country.population}</p>
                <p class="region"><span class="bolder-text">Region:</span> ${country.region}</p>
            </div>
            `
        })
    }).
    catch(err => console.log(err))
