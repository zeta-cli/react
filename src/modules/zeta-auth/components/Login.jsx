import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authService } from '..';

const LoginHead = () => (
  <div>
    <img src={window.location.origin + '/images/zeta.png'} width="80px" alt="Zeta" />
    <h1 className="text-center pt-4">Wellcome to Zeta!</h1>
    <p className="text-center pb-4 text-muted">Please sign in below or <a href="/">create an account.</a>
    </p>
  </div>
);

const ErrorLogin = (props) => {
  if (!props.inError) {
    return null;
  }
  return (
    <div className="pt-5">
      <p className="text-danger align-center">{props.errorMessage}</p>
    </div>
  );
};

export default function Login(props, context) {

  const history = useHistory();

  // const [errorMessage, setErrorMessage] = useState(null);
  const [status, setStatus] = useState({ logging: false, error: false });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmitForm(e) {
    e.preventDefault();
    setStatus({ logging: true, error: false });
    const user = await authService.auth({ email, password });
    if (user) {
      history.push('/');
    } else {
      setStatus({ logging: false, error: true });
      setTimeout(() => { setStatus({ logging: false, error: false }); }, 1000);
    }
  }

  return (
    <div>

      <LoginHead />

      <form className="mx-auto" onSubmit={onSubmitForm}>

        {/* Email */}

        <div className="form-group">
          {/* <label for="email">Email</label> */}
          <input type="email" className="form-control" name="email" id="email" placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input type="password" className="form-control" name="password" id="password" aria-describedby="passwordHelp"
            value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <div className="invalid-feedback">
            <div>Password is required</div>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="w-100 btn btn-primary" disabled={status.logging ? true : false}>
            <span>{status.logging ? 'Validating ... please wait' : 'SIGN IN'}</span>
          </button>
        </div>
        <div className="float-left">
          <a href="/public">Forgot your password?</a>
        </div>

        <div className="float-right">
          <span><input type="checkbox" name="signed" className="mr-2" /> Keep me signed in</span>
        </div>

        <ErrorLogin errorMessage='Invalid email or password' inError={status.error}></ErrorLogin>

      </form>

    </div>
  );
}
