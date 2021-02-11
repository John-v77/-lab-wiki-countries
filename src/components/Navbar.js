import React from 'react';

const style1 ={
    display: 'flex',
    justifyContent:'space-evenly',
    backgroundColor:'#eee',
    padding: '25px',
}

const styleTitle={
    textAlign:"center",
    backgroundColor:'#eee',
}

function Navbar(props) {
    return (
        <nav>
        
        <div style={styleTitle}><H1>lab-wiki-countries</H1></div>
        
        <div style={style1}>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </div>
        
        </nav>
    );
}

export default Navbar;