import React from 'react';

function CountriesList(props) {
    return (
                <li>{props.name.official}</li>
    );
}

export default CountriesList;