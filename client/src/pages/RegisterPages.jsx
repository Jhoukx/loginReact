import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../register.css';

function RegisterPages() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUp, isAuthenticated, registerError } = useAuth();
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
        {
          errors.username && (
            <p className='textitos'>Username is required</p>
          )
        }
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        <br />
        <br />
        {
          errors.email && (
            <p className='textitos'>Email is required</p>
          )
        }
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <br />
        <br />
        {
          errors.password && (
            <p className='textitos'>Password is required</p>
          )
        }
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />
        <br />
        <button type="submit" className='startButton'>Register</button>
        {
          registerError &&
          <p className="credentialFailed" >
            {registerError}
          </p>
        }
        <p>Already have a account? <a href="/login">Log in </a></p>
      </form>
    </>
  );
}

export default RegisterPages