import "./_login.scss";
import Logo from "../../Assets/Logo.svg";
import SignImg from "../../Assets/signIn.png";
const Login = () => {
  return (
    <>
      <div className="wrapper">
        <div className="login__left">
          <div className="login__leftContainer">
            <div className="login__leftHeader">
              <div className="logo">
                <img src={Logo} alt="logo-img" />
              </div>
            </div>
            <div className="login__leftBody">
              <div className="img__container">
                <img src={SignImg} alt="sign in" />
              </div>
            </div>
          </div>
        </div>
        <div className="login__right">
          <div className="login__rightContainer">
            <div className="login__rightHeader">
              <h1>Welcome!</h1>
              <p>Enter details to login</p>
            </div>
            <div className="login__rightBody">
              <form className="login__form">
                <div className="form__details">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="form__details ">
                  <input type="password" placeholder="Password" />
                  <button>show</button>
                </div>
                <p>forgot password</p>

                <button>Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
