import React, {useState, useEffect} from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom';



function CountryDetails(props) {

    console.log('PRops**', props)
    // let [country, setCountry] = useState({})
    let country = countries.find(eachCountry =>{
        return eachCountry.cca3 === props.match.params.id
    })
        
    let countryBorders = country.borders.map(eachBorder => {
        return(
            <li key={eachBorder}>
                <Link to={`${eachBorder}`}>
                    {eachBorder}
                </Link>
            </li>
        )
    }) 

    // console.log(country)
    return (
        <div class="col-7">
            <h1>{country.flag}  {country.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">
                    Capital
                  </td>
                  <td>: 
                    {country.capital}
                  </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        
                    </td>
                </tr>
           
            <p>Area:   {country.area}</p>
            <p>Borders:</p>
            <ul style={{listStyle: 'none', textAlign: 'left'}}>
                {countryBorders}
            </ul>
        </div>
    );
}



export default CountryDetails;