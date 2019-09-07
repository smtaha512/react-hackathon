import { el } from '../../shared/el';
import AuthButton from './auth-button';
import FormLabelGroup, { FormLabelGroupProps } from './form-label-groups';

export interface AuthFormProps {
  labelGroupsProps: FormLabelGroupProps[];
  buttonText: string;
}

const AuthForm: React.SFC<AuthFormProps> = (props: AuthFormProps) =>
  el(
    'form',
    { className: 'w-100' },
    props.labelGroupsProps.map(labelGroupProps => el(FormLabelGroup, labelGroupProps)),
    el(AuthButton, { text: props.buttonText })
  );

export default AuthForm;
