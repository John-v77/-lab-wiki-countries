import React from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom';



function CountryDetails(props) {
    console.log(props)
    let country = countries.filter(eachCountry =>{
        return eachCountry.cca3 === props.params.id
    })

    
    // let countryBorders = CountryDetails.countryBorders.map(eachBorder => {
    //     return(
    //         // <li key={eachBorder}>
    //         //     <Link to={``}
    //         // </li>
            
    //     )
    // }) 


    return (
        <div>
            
        </div>
    );
}



export default CountryDetails;