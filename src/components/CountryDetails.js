import React from 'react';
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
                  <td style={{width: '30vh'}}>
                    Capital
                  </td>
                  <td>
                    {country.capital}
                  </td>
                </tr>
                <tr>
                    <td>
                        Area
                    </td>
                    <td>
                        {country.area}km <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>
                        Borders
                    </td>
                    <td>
                        <ul style={{textAlign: 'left'}}>
                            {countryBorders}
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}



export default CountryDetails;