import { Button, Typography } from '@mui/material';
import { FieldInput, Label, MyForm } from 'components/ContactForm';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { setToast } from 'redux/toast/slice';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        dispatch(
          setToast({
            open: true,
            message: 'You are successfully logged in',
            condition: 'success',
          })
        );

        resetForm();
      })
      .catch(() =>
        dispatch(
          setToast({
            open: true,
            message: 'Incorrect email or password',
            condition: 'error',
          })
        )
      );
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <MyForm>
        <Label>
          <Typography component="span" ml="12px" mb="8px">
            Email
          </Typography>
          <FieldInput type="email" name="email" />
        </Label>
        <Label>
          <Typography component="span" ml="12px" mb="8px">
            Password
          </Typography>
          <FieldInput type="password" name="password" />
        </Label>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: '100%',
            borderRadius: '20px',
            mt: '12px',
            fontWeight: 700,
            fontSize: '18px',
          }}
        >
          Submit
        </Button>
      </MyForm>
    </Formik>
  );
};
