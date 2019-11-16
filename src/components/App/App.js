import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from '../../routes/HomePage/HomePage';
import BylawsPage from '../../routes/BylawsPage/BylawsPage';
import MinutesPage from '../../routes/MinutesPage/MinutesPage';
import DraftBoardPage from '../../routes/DraftBoardPage/DraftBoardPage';
import SchedulePage from '../../routes/SchedulePage/SchedulePage';
import LinksPage from '../../routes/LinksPage/LinksPage'
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
        <Route 
          path={'/draftboard'}
          component={DraftBoardPage}
        />
        <Route 
          path={'/schedule'}
          component={SchedulePage}
        />
        <Route 
          path={'/links'}
          component={LinksPage}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
