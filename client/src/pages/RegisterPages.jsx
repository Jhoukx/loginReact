import { useForm } from 'react-hook-form'
import {registerRequest} from '../../api/auth.js';
function RegisterPages() {
  const { register,handleSubmit } = useForm();

  return (
    <>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit(async(values) => {
         const res =  await registerRequest(values);
         console.log(res);
        })}
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