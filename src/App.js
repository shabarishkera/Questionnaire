import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {useEffect} from 'react'

import HomeScreen from './HomeScreen';
import {BrowserRouter as Router,Routes,Route
 } from 'react-router-dom';
function App() {
  useEffect(()=>{


  },[])
  return (
    <>
    <Router>
      <Routes>
    <Route path='/' Component={HomeScreen}></Route>
   
      
    </Routes>
          </Router>
    </>
  );
}

export default App;
