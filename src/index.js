import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './Login';
import reportWebVitals from './reportWebVitals';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
      <Route
          {...rest}
          render={(matchProps) =>
              isLoggedIn ? (
                  <Component {...matchProps} {...rest} />
              ) : (
                  <Redirect
                      to={{
                          pathname: '/',
                          state: { from: matchProps?.location }
                      }}
                  />
              )
          }
      />
  );
};


const RouteWithProps = ({ props, component: Component, ...rest }) => (
  <Route {...rest} exact render={(matchProps) => <Component {...matchProps} {...props} />} />
);

export const getUserName = () => window.localStorage.getItem('username'); 

const Main = () => {
  const userName = getUserName();
  const [isLoggedIn, setIsLoggedIn] = useState(!!userName);
  const history = useHistory()

  if (isLoggedIn) {
    history.push('/app');
  }

  return (
    
      <Switch>
      <RouteWithProps
            component={Login}
            exact={true}
            props={{ setIsLoggedIn }}
            path="/"
        />
        <PrivateRoute component={App}  path="/app" isLoggedIn={isLoggedIn}/>
      </Switch>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
