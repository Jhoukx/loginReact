import reactLogo from "../assets/react.svg";

function LoginPage() {
  return (
    <>
      <section>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h3>Proyect made with rect and Nodejs :D</h3>
        </a>
      </section>
      <h1>Login</h1>
      <div className="card">
        <input type="email" name="" id="email" placeholder="Email" />
        <br />
        <input type="password" name="" id="password" placeholder="Password" />
        <br />
        <br />
        <button >Log in</button>
        <p>
          Dont have a account? <a href="/account/register">Register</a>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
