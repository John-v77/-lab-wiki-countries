import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Switch } from 'react-router';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
        <Navbar/>

                                {/* Bootstrap container wrapper div */}
      <div class="container">
                                    {/* Bootstrap row wrapper div */}
        <div class="row">
          <CountriesList/>
          <Switch>
            <Route exact path='/:id' render={(props) => <CountryDetails {...props} /> } />
          </Switch>
        </div>
      </div>
       
    </div>
  );
}

export default App;
