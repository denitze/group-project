

import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";


import Zeitung from './components/Zeitung';
import Coronanews from './components/Coronanews';
import Kontakt from './components/Kontakt';

import News from './components/News';
function App() {
  
  return (
   <main>
    
    <Router>
    
    
      <Switch>
        <Route path="/news" component={News} />
        
        <Route path="/zeitung" component={Zeitung} />
        <Route path="/coronanews" component={Coronanews} />
        <Route path="/kontakt" component={Kontakt} />
      </Switch>
      
     

    </Router>

   </main>
  );
}

export default App;
