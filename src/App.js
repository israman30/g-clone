import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import SearchPage from './pages/SearchPage/SearchPage'

// https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
// https://cse.google.com/cse/create/new

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
