import { el } from '../../shared/el';
import AuthCard from './auth-card';
import AuthRoutes from './auth-routes';

export interface AuthPageProps {}

const AuthPage: React.SFC<AuthPageProps> = () => {
  return el(
    'div',
    { className: 'container' },
    el(
      'div',
      { className: 'row' },
      el(
        'div',
        { className: 'col-sm-9 col-md-9 col-lg-5 mx-auto' },
        AuthCard({ body: el('div', { className: 'card-body' }, AuthRoutes({})) })
      )
    )
  );
};

export default AuthPage;
