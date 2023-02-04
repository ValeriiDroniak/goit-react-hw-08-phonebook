import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Button, Typography } from '@mui/material';
import { register } from 'redux/auth/operations';
import { FieldInput, Label, MyForm } from 'components/ContactForm';
import { setToast } from 'redux/toast/slice';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    dispatch(
      setToast({
        open: true,
        message: 'Congratulations, now you can use our app',
        condition: 'success',
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <MyForm>
        <Label>
          <Typography component="span" ml="12px" mb="8px">
            Username
          </Typography>
          <FieldInput type="text" name="name" />
        </Label>
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
          Register
        </Button>
      </MyForm>
    </Formik>
  );
};
