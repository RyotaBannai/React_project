import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <Router>
      <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/about'>About</Link></li>
         <li><Link to='/friends'>Friends</Link></li>
      </ul>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/friends' component={Friends} />
      </div>
    </Router>
    </React.Fragment>
    )
}

//アロー関数でそのまま（）の内側をreturn.
//<Route>のcomponent propertyに注目. classだけでなく, functionも使えたことを思い出す.

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)

const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
)

export default App;
