import { useForm } from "react-hook-form";
import reactLogo from "../assets/react.svg";

function LoginPage() {
  const { register,handleSubmit,formState:{errors}} = useForm();

  const onSubmit = handleSubmit(async (field) => {
    console.log();
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

        <p>Already have a account? <a href="/account/login">Log in </a></p>
      </form>
    </>
  );
}

export default LoginPage;
