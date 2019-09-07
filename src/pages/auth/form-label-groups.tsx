import * as React from 'react';

import { el } from '../../shared/el';

export interface FormLabelGroupProps {
  input: {
    type: string;
    id: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    autofocus?: boolean;
  };
  label: {
    text: string;
  };
}

const FormLabelGroup: React.SFC<FormLabelGroupProps> = (props: FormLabelGroupProps) => {
  const {
    label: { text },
    input: { className, autofocus, id, placeholder, required, type }
  } = props;
  return el(
    'div',
    { className: 'form-label-group' },
    el('label', { htmlFor: id }, text),
    el('input', {
      type,
      id,
      className: `px-3 py-2 mb-3 ${className}`,
      placeholder,
      required,
      autoFocus: autofocus
    })
  );
};

export default FormLabelGroup;
