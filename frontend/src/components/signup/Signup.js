import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../../redux/actions";

const Signup = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate();
  const state = useSelector(state => state)
  // console.log(state);
  const [signupform, setSignupform] = useState({email:"",password:""})
  const handleChange=(e)=>{
    const{name,value}=e.target
    setSignupform({...signupform,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(register(signupform))
    setSignupform({email:"",password:""})
    // navigate('/login')
  }
  return (
    <div className="mt-5 p-5 card container">
       <h1 className="card bg-secondary text-white p-5 ">Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={signupform.email}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={signupform.password}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="mt-3 form-control btn btn-success">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
