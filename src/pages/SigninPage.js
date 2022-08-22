import React from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useUserAuthContext } from '../context/UserContext';
export default function SignInPage() {
  const [{ handleSetIsAuthenticated }] = useUserAuthContext();
  // console.log(isAuthenticated);
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPassWordValue] = React.useState('');
  const handleOnCLickNavigate = () => {
    if (
      emailValue !== 'naumanshabbir19@gmail.com' &&
      passwordValue !== '123456'
    ) {
      return;
    }
    handleSetIsAuthenticated(true);
    navigate('/dashboard');
  };
  return (
    <div className="form_container">
      <div className="container  d-flex">
        <form>
          <div
            className="form_inside"
            style={{
              width: '400px',
              backgroundColor: 'black',
              padding: '50px',
            }}
          >
            <h3 style={{ color: 'white' }}>Sign In</h3>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                value={passwordValue}
                onChange={e => setPassWordValue(e.target.value)}
              />
            </FloatingLabel>
            <Button
              className="mt-2"
              style={{ width: '100%', fontSize: '18px' }}
              onClick={handleOnCLickNavigate}
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
