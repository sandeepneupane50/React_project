
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import Blogdetails from './Blogdeails';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>

        <Route exact path="/Create">
          <Create />
        </Route>


        <Route exact path="/blogs/:id">
        <Blogdetails />
        </Route>


      </Switch>
      </div>

      
    </div>
    </Router>
  );
}

export default App;
