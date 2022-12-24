import React from 'react';
import './App.css';
import {HomePage} from './homepage'
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './subpage/store';
import { CartDetail } from './subpage/store/cartpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterUser } from './subpage/registerUser';
import { LogInuser } from './subpage/loginUser';
import { AdminPage } from './subpage/admin'

const App =()=> {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={ <HomePage/>}/>
          <Route exact path='/cartpage' element={ <CartDetail/>}/>
          <Route exact path='/registerUser' element={ <RegisterUser/>}/>
          <Route exact path='/logInUser' element={ <LogInuser/>}/>
          <Route exact path='/Adminpage' element={ <AdminPage/>}/>
        </Routes>
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;
