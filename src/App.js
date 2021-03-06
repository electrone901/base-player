import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import setAuthToken from './utilis/setAuthToken';
import PrivateRoute from './component/common/PrivateRoute';
import { setCurrentUser, logoutUser } from './actions/authActions';

import store from './store';

import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Deals from './component/deals/Deals';



import AddDeal from './component/deals/AddDeal';
import Deal from './component/deals/Deal';
import AddReview from './component/review/AddReview';

import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Portfolio from './component/portfolio/Portfolio';
import Transactions from './component/transactions/Transactions';
import Stocks from './component/stocks/Stocks';


// BASEBALL
import Options from './component/baseball/Options';
import PlayerView from './component/baseball/PlayerView';
import Player from './component/baseball/TeamView';

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  
  const currentTime = Date.now() / 1000;
  
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div>
              <Route exact path="/" component={Options} />
              <Route exact path="/players" component={PlayerView} />
              <Route exact path="/team" component={Player} />
              <Route exact path="/deals" component={Deals} />
              <Route exact path="/addReview/:id" component={AddReview} />
              <Switch>
                 <Route exact path="/deal/:id" component={Deal} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
