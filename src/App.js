import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HikingContainer from './HikingContainer';
import NavBar from './NavBar';
import Home from './Home';
import FoodTruckContainer from './FoodTruckContainer';
function App() {


// useEffect(()=>{
//   fetch("http://localhost:3000")
//   .then(r => r.json())
//   .then(console.log)


// },[])

  return (<>
        <NavBar/>
       
      <Switch>

      

       <Route  path = "/trails">
        <HikingContainer/>
       </Route>
      
      <Route path="/food">
        <FoodTruckContainer/>
      </Route>
    
          <Route exact path = "/">
            <Home/>
          </Route>
    
      </Switch>
  
  </>
  );
}

export default App;
