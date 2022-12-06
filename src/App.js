// Css
import './App.css';
// Components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/navbar/Navbar';
import { useAuthContext } from './hooks/useAuthContext';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
            <Switch>
              <Route exact path="/">
                {!user && (<Redirect to='/login' />) }
                {user && (<Home />)}
              </Route>
              <Route path="/login">
                {!user && <Login />}
                {user && (<Redirect to='/' />)}
              </Route>
              <Route path="/signup">
                {!user && <Signup />}
                {user && <Redirect to='/' />}
              </Route>
            </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
