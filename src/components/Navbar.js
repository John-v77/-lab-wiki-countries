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
        
    //     <nav class="navbar navbar-dark bg-primary mb-3">
    //     <div class="container">
    //       <a class="navbar-brand" href="/">WikiCountries</a>
    //     </div>
    //   </nav>

        <nav>
        
        <div>
            <h1>Wiki Countries</h1>
        </div>
        
        {/* <div style={style1}>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </div> */}

        {/* <div>
            <Switch>
                <Route exact path="/" render={(props) => <Home {...props}/>}/>
                <Route exact path="/about" render={(props) => <About {...props}/>}/>
                <Route exact path="/contact" render={(props) => <Contact {...props}/>}/>
            </Switch>
        </div> */}
        
        </nav>
    );
}

export default Navbar;