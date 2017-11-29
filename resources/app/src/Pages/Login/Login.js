import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../../Actions/user';
import inputHelper from '../../Helpers/inputHelper';
import { Button } from 'semantic-ui-react';

import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (window.localStorage.getItem('token')) {
      this.props.history.push('/overview');
    }
  }

  onSubmit(values) {
    this.props.loginUser(values);
    this.props.history.push('/overview');
  }

  render() {
    const handleSubmit = this.props.handleSubmit;

    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h3 className="header">Login</h3>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="col-sm-12">
              <Field
                name="username"
                type="text"
                labelClass="loginLabel"
                className="loginInput"
                fluid
                label="Email *"
                component={inputHelper.renderField}
                placeholder="email@example.com"
              />
            </div>
            <div className="col-sm-12">
              <Field
                name="password"
                type="password"
                labelClass="loginLabel"
                className="loginInput"
                fluid
                label="Password *"
                component={inputHelper.renderField}
                placeholder="*****"
              />
            </div>
            <div className="col-sm-12">
              <Button
                className="loginButton"
                color="teal"
                labelPosition="right"
                icon="right chevron"
                type="submit"
                content="Login"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  const regExp = new RegExp(['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
    '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
    '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
    '[a-zA-Z]{2,}))$'].join(''));

  if (!values.username) {
    errors.username = 'Username cannot be empty';
  }
  if (values.username && values.username.length < 4) {
    errors.username = 'Username should be min 4 chars';
  }
  if (values.username && !regExp.test(values.username)) {
    errors.username = 'Username should be a valid email';
  }
  if (!values.password) {
    errors.password = 'Password should not be empty';
  }

  return errors;
}
export default
reduxForm({ validate, form: 'loginForm' })(connect(null, { loginUser })(Login));

