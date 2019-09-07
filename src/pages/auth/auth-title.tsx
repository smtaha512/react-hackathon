import { el } from '../../shared/el';

export interface AuthTitleProps {
  title: string;
}

const AuthTitle: React.SFC<AuthTitleProps> = (props: AuthTitleProps) =>
  el('h4', { className: 'mb-3 card-title text-center' }, props.title);

export default AuthTitle;
