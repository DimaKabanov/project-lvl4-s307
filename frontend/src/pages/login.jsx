import { Formik, Form, Field } from 'formik';

function LoginScreen() {
  const initialValues = {
    userName: '',
    password: ''
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="userName">Имя</label>
        <Field id="userName" name="userName" required />

        <label htmlFor="password">Пароль</label>
        <Field id="password" name="password" type="password" required />

        <button type="submit">Войти</button>
      </Form>
    </Formik>
  );
}

export default LoginScreen;
