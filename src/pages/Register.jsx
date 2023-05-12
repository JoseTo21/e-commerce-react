import { useForm } from "react-hook-form";
import useAuthentication from "../hooks/useAuthentication";
import defaultRegisterValues from "../utils/defaultRegisterValues";
import "./styles/register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const { createNewUser } = useAuthentication();

  const submit = (data) => {
    createNewUser(data);
    reset(defaultRegisterValues);
  };

  return (
    <div className="register__container">
      <form className="register__form" onSubmit={handleSubmit(submit)}>
        <h2 className="register__title">Create a New User</h2>
        <div className="register__label-input">
          <label htmlFor="firstName">First Name</label>
          <input {...register("firstName")} type="text" id="firstName" />
        </div>
        <div className="register__label-input">
          <label htmlFor="lastName">Last Name</label>
          <input {...register("lastName")} type="text" id="lastName" />
        </div>
        <div className="register__label-input">
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" id="email" />
        </div>
        <div className="register__label-input">
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" id="password" />
        </div>
        <div className="register__label-input">
          <label htmlFor="phone">Your Mobile Number</label>
          <input {...register("phone")} type="tel" id="phone" />
        </div>
        <button className="register__btn">Register</button>
        <p className="register__login">
          Already have an account?{" "}
          <Link className="login" to={"/login"}>
            Log in!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
