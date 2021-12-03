import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
const Login = () => {
  const [loginform, setLoginform] = useState({ email: "", password: "" });
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginform({...loginform,[name]:value})
  };
  const handleSubmit=(e)=>{
e.preventDefault();
dispatch(login(loginform))
// console.log(loginform);
setLoginform({email:"",password:""})
  }
  return (
    <div className="mt-5 p-5 card container">
         <h1 className="card bg-secondary text-white p-5 ">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={loginform.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            value={loginform.password}
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="mt-3 form-control btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
