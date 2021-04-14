import React from 'react';
import {Link} from 'react-router-dom';





function Navbar(props) {

    // const style1 ={
    //     display: 'flex',
    //     justifyContent:'space-evenly',
    //     backgroundColor:'#eee',
    //     padding: '25px',
    // }
    
    // const styleTitle={
    //     textAlign:"center",
    //     backgroundColor:'#eee'
    // }


    return (
        
    <nav className="navbar navbar-dark bg-primary mb-5">
        <div className="container">
           <h4 className="text-white">Wiki Countries</h4>
        </div>
    </nav>
    );
}

export default Navbar;