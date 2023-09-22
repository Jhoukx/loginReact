import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function RegisterPages() {
  const { register, handleSubmit } = useForm();
  const { signUp, isAuthenticated } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate("/profile") 
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  })
  return (
    <>
      <h1>Register</h1>
      <form
        onSubmit={onSubmit}
      > 
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
        />{" "}
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />
        <br />
        <button type="submit">Register</button>
        <p>Already have a account? <a href="/account/login">Log in </a></p>
      </form>
    </>
  );
}

export default RegisterPages