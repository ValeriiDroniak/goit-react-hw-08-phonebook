import { Form } from 'formik';
import styled from '@emotion/styled';

export const FormRegister = styled(Form)`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[3]};
`;
