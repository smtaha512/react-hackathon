import { el } from '../../shared/el';
import { DetailedReactHTMLElement } from 'react';

export interface AuthCardProps {
  body: React.SFC | React.ComponentClass | React.FC | DetailedReactHTMLElement<any, any>;
}

const AuthCard: React.SFC<AuthCardProps> = (props: AuthCardProps) =>
  el('div', { className: 'card border-0 rounded shadow card-auth my-5' }, props.body);

export default AuthCard;
