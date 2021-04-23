import React, { useState } from 'react'

const Login = ({ setIsLoggedIn }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const defaultPassword = 'hemantnegi'
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== defaultPassword) {
      alert('Wrong credentials');
      return
    }
    window.localStorage.setItem('username', userName);
    setIsLoggedIn(userName)
    
  }
  
  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className="row mt-4">
    <div className="col-md-6 mx-auto">
        <div className="card">
            <div className="card-body">
                <h1 className="text-center pb-4 pt-3">
                    <span className="text-primary">
                        <i className="fas fa-lock" />{' '}
                        Login
                    </span>
                </h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group mt-2">
                        <label htmlFor="username">Username</label>
                        <input
                            className="form-control"
                            required
                            value={userName}
                            onChange={onUserNameChange}
                        />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            required
                            value={password}
                            onChange={onPasswordChange}
                        />
                    </div>
                    <input type="submit" value="Login" className="btn btn-primary btn-block" />
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login
