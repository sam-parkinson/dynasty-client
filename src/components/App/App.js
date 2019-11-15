import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../../routes/HomePage/HomePage';
import BylawsPage from '../../routes/BylawsPage/BylawsPage';
import MinutesPage from '../../routes/MinutesPage/MinutesPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route 
          exact
          path={'/'}
          component={HomePage}
        />
        <Route 
          path={'/bylaws'}
          component={BylawsPage}
        />
        <Route 
          path={'/minutes'}
          component={MinutesPage}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
