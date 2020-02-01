import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const FRIENDS = [
  {
    id: 'serval',
    nameJa: 'サーバル',
    nameEn: 'Serval Cat',
    family: 'ネコ目ネコ科ネコ属'
  },
  {
    id: 'raccoon',
    nameJa: 'アライグマ',
    nameEn: 'Common raccoon',
    family: 'ネコ目アライグマ科アライグマ属'
  },
  {
    id: 'fennec',
    nameJa: 'フェネック',
    nameEn: 'Fennec',
    family: 'ネコ目イヌ科キツネ属'
  }
]

//Array.find method
/*
  const array1 = [5, 12, 8, 130, 44];
  const found = array1.find(element => element > 10); >>12
*/

const friendById = id => FRIENDS.find(friend => friend.id === id)
const FriendList = () => (
  <ul>
    {FRIENDS.map(friend => (
      <li key={friend.id}>
        <Link to={`/friends/${friend.id}`}>{friend.nameJa}</Link>
      </li>
    ))}
  </ul>
)

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
    <Route exact path='/friends' component={FriendList} />
    <Route exact path='/friends/:id' component={Friend} />
  </div>
)

const Friend = props => {
  //アロー関数で内側に何か宣言したいときは{}を使って、
  //return をする.
  const { id } = props.match.params
  const friend = friendById(id)

  if (typeof friend === 'undefined')  {
    return (
      <div>
        <p>Friends with id '{id}' does not exist.</p>
      </div>
    )
  }

  const containerStyle = { border: '1px gray solid', display: 'inline-block', padding: 10 }
  const contentsStyle = { margin: 0 }

  return (
    <div>
      <div style={containerStyle}>
        <p style={contentsStyle}>{friend.family}</p>
        <h1 style={contentsStyle}>{friend.nameJa}</h1>
        <p style={contentsStyle}>{friend.nameEn}</p>
      </div>
    </div>
  )
}

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

export default App;
