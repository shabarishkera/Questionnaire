import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import NoInternet from './NoInternet'
function App() {
  useEffect(()=>{


  },[])
  return (
    <div className="App">
      <p>hello</p>
      <NoInternet>
        {/* Your internet-dependent components go here */}
        {/* For example, a chat component, a news feed, etc. */}
      </NoInternet>
      
    </div>
  );
}

export default App;
