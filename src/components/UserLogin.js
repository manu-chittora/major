import React , {useState} from 'react';
import { Header } from './Header';
import {useHistory} from "react-router-dom";
import "./UserLogin.css"
import "./img2.svg"
export default function UserLogin() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginUser=async (e)=>{
    e.preventDefault();
    const res = await fetch("http://localhost:5000/userlogin", {
      method:"POST", 
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email, password
      })
    });
    const data=res.json();
    if(res.status===400||!data){
      window.alert("Invalid Email or Password");
    }else{
      window.alert("Login Success");
      history.push("/");
    }
  }
  return (
    <div>
      <Header />
      <div className="back">
        <div className="container ">
          <div className=" row align-items-center d-flex justify-content-center">
            <div className=" form1  col-6">
              <form method="POST">
                <h1 className="main-heading">Log in</h1>
                <p><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="emailaddress" id="email" pattern=".+@gmail\.com" required placeholder="Email Address" /></p>
                <p><input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required placeholder="Password" /></p>
                <p><button className="button" onClick={loginUser}>Log in</button></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
