import { Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './Components/Details';
import Track from './Components/Track';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Details}></Route>
        <Route path="/track" component={Track}></Route>
      </Switch>
    </div>
  );
}

export default App;
