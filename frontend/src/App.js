import './App.css';
import Login from './components/Login/Login';
import Posts from './components/Posts/Posts';
import { BrowserRouter as Router, Redirect, Link, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  useEffect(() => {
    const val = Cookies.get('token');
    val ? setloggedIn(true) : setloggedIn(false);
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/posts" /> : <Login />}
      </Route>
    </Switch>
  );
}

export default App;
