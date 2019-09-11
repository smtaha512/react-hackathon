import * as React from 'react';

import { el } from '../../../shared/el';
import AuthTitle from '../auth-title';
import AuthForm from '../auth-form';

export interface SigninPageProps {}

const SigninPage: React.SFC<SigninPageProps> = () => {
  return el(
    'div',
    { className: 'p-5 card-body' },
    AuthTitle({
      title: 'Signin'
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
};

export default SigninPage;
