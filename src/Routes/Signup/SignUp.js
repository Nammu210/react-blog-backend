import React, { useState, useEffect } from "react";
import "./signup.style.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { SignupApi, localhostSignup } from "../../constants/ApiList";

function Signup() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [store, setStore] = useState(null);
  const [err, setErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);

  const handleButton = async (e) => {
    e.preventDefault();
    
    const { name, phone, email, password } = formdata;
    
    const API = SignupApi
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      password: "",
    });
    if (name && phone && email && password) {
      axios
        .post(API, formdata)
        .then((res) => {
         
          
          if(res.data.email){
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("name",res.data.name)
            localStorage.setItem("id",res.data._id)
            navigate("/",{replace:true});
          }else {
            setErr("Required field is missing");
          }
     
         
        })
        .catch((err) => console.log(err));
    } else {
      setErr("Required field is missing");
    }
  };

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formdata, [name]: value });
  };
  return (
    

    <div className="SignupParent">
      <button onClick={() => navigate("/")} className="backButtn">
        Back
      </button>
      <div className="signupText">Signup Here</div>
      <div className="Signupcontainer">
        <form className="SignupForm">
          <img
            className="lockImg"
            src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
            alt="Locked"
          />
          <input
            className="sInp "
            type="text"
            name="name"
            value={formdata.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />

          <input
            className="sInp"
            type="number"
            name="phone"
            value={formdata.phone}
            placeholder="Enter Your Phone Number"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="email"
            name="email"
            value={formdata.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            required
          />
          {emailErr && <span className="signupEmailErr">{err}</span>}
          <input
            className="sInp"
            type="password"
            name="password"
            value={formdata.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
          />
          {err && <span className="signupErrText">{err}</span>}

          <button className="Sbutn" onClick={handleButton}>
            Signup
          </button>
          <div>
            <NavLink to="/login">Account Already exist? login</NavLink>
          </div>
        </form>
      </div>
    </div>
   
  );
}

export default Signup;
