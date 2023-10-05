import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  console.log(udata);

  const adddata = (e) => {
    const { name, value } = e.target;


    setUdata(()=>{
      return{
        ...udata,
        [name]:value
      }
    })

 
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./Signup/logoimg.png" alt="ecommercelogo"></img>
        </div>

        <div className="sign_form">
          <form>
            <h1>Sign-Up</h1>

            <div className="form_data">
              <label htmlFor="fname">Your name</label>
              <input type="text" 
               onChange={adddata}
               value={udata.fname}
              name="fname"
               id="fname"
               ></input>
            </div>

            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input type="text"
                 onChange={adddata}
                 value={udata.email}
                 name="email" 
                 id="email"
               ></input>
            </div>

            <div className="form_data">
              <label htmlFor="number">Mobile Number</label>
              <input type="number"
                  onChange={adddata}
                  value={udata.mobile}
                  name="mobile" 
                  id="number"
               ></input>
            </div>

            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={adddata}
                value={udata.password}
                name="password"
                placeholder="At least 6 char"
                id="password"
              ></input>
            </div>

            <div className="form_data">
              <label htmlFor="cpassword">Password Again</label>
              <input type="password"
              onChange={adddata}
              value={udata.cpassword}
               name="password" 
               id="cpassword"
               ></input>
            </div>

            <button className="signin_btn">Continue</button>

            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Sign in</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
