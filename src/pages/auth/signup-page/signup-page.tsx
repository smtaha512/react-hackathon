import * as React from 'react';

import AuthCard from '../auth-card';
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
      { className: 'container' },
      el(
        'div',
        { className: 'row' },
        el(
          'div',
          { className: 'col-sm-9 col-md-7 col-lg-5 mx-auto' },
          el(AuthCard, {
            body: el(
              'div',
              { className: 'p-5 card-body' },
              el(AuthTitle, { title: 'Signup' }),
              el(AuthForm, {
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
                      required: true,
                      autofocus: true
                    },
                    label: { text: 'Password' }
                  }
                ],
                buttonText: 'Submit'
              })
            )
          })
        )
      )
    );
  }
}

export default SignupPage;
