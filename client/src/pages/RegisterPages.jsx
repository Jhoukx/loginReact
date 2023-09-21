import {useForm} from 'react-hook-form'
function RegisterPages() {
  const { register,handleSubmit } = useForm();

  return (
    <>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
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
        <p>Already have a account? <a href="/login">Log in </a></p>
      </form>
    </>
  );
}

export default RegisterPages