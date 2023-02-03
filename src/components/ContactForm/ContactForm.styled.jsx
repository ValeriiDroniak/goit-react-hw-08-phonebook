import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const Error = styled.p`
  margin: 0 0 8px 0;
  color: red;
`;

export const MyForm = styled(Form)`
  width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  padding-bottom: 10px;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  max-width: 100%;
  height: 35px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  padding-left: 12px;
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
`;

export const FieldInput = styled(Field)`
  max-width: 100%;
  height: 35px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  padding-left: 12px;
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
`;
