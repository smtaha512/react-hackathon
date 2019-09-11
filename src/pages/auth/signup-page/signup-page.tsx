import * as React from 'react';

import AuthTitle from '../auth-title';
import AuthForm from '../auth-form';

const el = React.createElement;
export interface SignupPageProps {}

export interface SignupPageState {}

class SignupPage extends React.Component<SignupPageProps, SignupPageState> {
  constructor(props: SignupPageProps) {
    super(props);
    this.state = {};
  }
  render() {
    return el(
      'div',
      { className: 'p-5 card-body' },
      AuthTitle({
        title: 'Signup'
      }),
      AuthForm({
        labelGroupsProps: [
          {
            input: {
              type: 'email',
              id: 'email',
              className: 'form-control',
              placeholder: 'Email',
              required: true,
              autofocus: true
            },
            label: { text: 'Email' }
          },
          {
            input: {
              type: 'password',
              id: 'password',
              className: 'form-control',
              placeholder: 'Password',
              required: true
            },
            label: { text: 'Password' }
          }
        ],
        buttonText: 'Submit'
      })
    );
  }
}

export default SignupPage;
