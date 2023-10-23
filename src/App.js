import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Questions  from './Questions';
import {useEffect} from 'react'
import Store from './Store'
import HomeScreen from './HomeScreen';
import Answers from './Answers';
import {BrowserRouter as Router,Routes,Route
 } from 'react-router-dom';
import LearnMore from './LearnMore';
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
    <Route path='/answers' Component={Answers}></Route>
    <Route path='/learnmore' Component={LearnMore}></Route>
   
      
    </Routes>
          </Router>
          </Store>
    </>
  );
}

export default App;
