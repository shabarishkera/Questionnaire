import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Questions  from './Questions';
import {useEffect} from 'react'
import Store from './Store'
import HomeScreen from './HomeScreen';
import {BrowserRouter as Router,Routes,Route
 } from 'react-router-dom';
function App() {
  useEffect(()=>{


  },[])
  return (
    <>
    <Store>
    <Router>
      <Routes>
    <Route path='/' Component={HomeScreen}></Route>
    <Route path='/questions' Component={Questions}></Route>
   
      
    </Routes>
          </Router>
          </Store>
    </>
  );
}

export default App;
