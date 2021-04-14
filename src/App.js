import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Switch } from 'react-router';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <CountriesList/>
        <Switch>
          <Route exact path='/countries/:id' render={(props) => <CountryDetails {...props} /> } />
        </Switch>
    </div>
  );
}

export default App;
