import React from 'react';
import { Link } from 'react-router-dom'
import countries from '../countries.json'
import 'bootstrap/dist/css/bootstrap.css';

function CountriesList(props) {

    return (
        <div class="col-5" style={{maxHeight: '90vh', overflow:'scroll'}}>
            <div class="list-group">
                <ul style={{listStyle: 'none', textAlign: 'left'}}>
                    {countries.map(each => {
                         return (<li key={each.cca3}>
                                     <Link to ={`./countries/${each.cca3}`} >{each.name.official}</Link>
                                </li>)})}
                </ul>
                
            </div>
        </div>
        
        
        
    );
}

export default CountriesList;