import { el } from '../../shared/el';

export interface AuthButtonProps {
  className?: string;
  text: string;
}

const AuthButton: React.SFC<AuthButtonProps> = (props: AuthButtonProps) =>
  el(
    'button',
    { className: `btn btn-lg btn-primary btn-block text-uppercase ${props.className}`, type: 'submit' },
    props.text
  );

export default AuthButton;
