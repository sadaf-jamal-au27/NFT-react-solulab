import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router basename='/'>
        <Routes>
          <Route exact path='/' element={  <App />}/>
          <Route exact path='/login' element={ <Login/>}/>
          <Route exact path='/signup' element={ <Signup />}/>
        </Routes>
      </Router>
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
