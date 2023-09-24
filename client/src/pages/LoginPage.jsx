import { useForm } from "react-hook-form";
import reactLogo from "../assets/react.svg";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const { register,handleSubmit,formState:{errors}} = useForm();
  const { signIn, loginError, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  
  const onSubmit = handleSubmit(async (field) => {
    signIn(field); 
  })
  return (
    <>
      <section>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h3>Proyect made with rect and Nodejs :D</h3>
        </a>
      </section>
      <h1>Login</h1>
      {
        loginError &&
        <p className="credentialFailed">
          {loginError}
        </p>
      }
      <form
        onSubmit={onSubmit}
      >
        {
          errors.email && (
            <p className='textitos'>Email is required</p>
          )
        }
        <input
          type="email"
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
        <button type="submit" className='startButton'>Log in</button>

        <p>Don't have a account? <a href="/account/register">register </a></p>
      </form>
    </>
  );
}

export default LoginPage;
