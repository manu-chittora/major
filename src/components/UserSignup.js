import React from 'react'
import { Header } from './Header';
import { useState } from "react";
import {useHistory} from "react-router-dom"
import { useContext } from "react";
import Axios from "axios";
import './UserSignup.css';
import "./img2.svg"
export default function UserSignup() {
    const history=useHistory();
    const baseURL5="/usersignup";
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: 0,
        password: "",
        cpassword: "",
        shopdescription:"",
        shopaddress: "",
        shopimage: "",
        item1name:  "",
        item1image: "",
        item1desc:  "",
        item2name:  "",
        item2image: "",
        item2desc:  "",
        item3name:  "",
        item3image: "",
        item3desc:  "",
    });

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        // console.log(newdata);
        setData(newdata);
    }
    const PostData = async (e)=> {
        e.preventDefault();
        const { name, email,phone,password,cpassword,shopdescription,shopaddress,shopimage,item1name,
            item1image,item1desc,item2name,item2image,item2desc,item3name,item3image,item3desc}=data;
        const res =await fetch("http://localhost:5000/usersignup", {
                method:"POST", 
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({name, email,phone,password,cpassword,shopdescription,shopaddress,shopimage,item1name,
                    item1image,item1desc,item2name,item2image,item2desc,item3name,item3image,item3desc})
            });
            const res1= await res.json();
            if(res.status===422||!res1){
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            }else{
                window.alert("Registration Successfull");
                console.log("Successfull Registration");
                history.push("/userlogin");
            }
        }
    return (
        <>
            <Header />
            
                <div className='container '>
                    <div className='row align-items-center d-flex justify-content-center' id=''>
                    <form > 
                    <div className='col-'>
                    <h1>Register Your Shop</h1>
                            <label htmlFor="name">Shop Name*</label>
                            <p><input value = {data.name} onChange={(e) => handle(e)} type="text" name="name" id="name" required placeholder="Shop Name" autoFocus /></p>
                            <label htmlFor="email">Email*</label>
                            <p> <input value = {data.email} onChange={(e) => handle(e)} type="email" name="email" id="email" required placeholder="Email Address" autoFocus /></p>
                            <label htmlFor="phone">Phone*</label>
                            <p><input value = {data.phone} onChange={(e) => handle(e)} type="number" name="phone" id="phone" required maxLength="10" minLength="10" placeholder="Phone Number" /></p>
                            <label htmlFor="password">Password*</label>
                            <p><input value = {data.password} onChange={(e) => handle(e)} type="text" name="password" id="password" required placeholder="Password" autoFocus /></p>
                            <label htmlFor="cpassword">Confirm Password*</label>
                            <p><input value = {data.cpassword} onChange={(e) => handle(e)} type="text" name="cpassword" id="cpassword" required placeholder="Confirm Password" autoFocus /></p>
                            <label htmlFor="shopdescription">Shop Description</label>
                            <p><input value = {data.shopdescription} onChange={(e) => handle(e)} type="text" name="shopdescription" id="shopdescription" placeholder="Shop Description" autoFocus /></p>
                            <label htmlFor="shopaddress">Shop Address</label>
                            <p><input value = {data.shopaddress} onChange={(e) => handle(e)} type="text" name="shopaddress" id="shopaddress" placeholder="Shop Address" autoFocus /></p>
                            <label htmlFor="shopimage">Shop Image</label>
                            <p><input value = {data.shopimage} onChange={(e) => handle(e)} type="text" name="shopimage" id="shopimage" placeholder="Shop Image" autoFocus /></p>
                        </div>
                        <div className='col-'>
                            <p><input value = {data.item1name} onChange={(e) => handle(e)} type="text" name="item1name" id="item1name" placeholder="Item 1 Name" autoFocus /></p>
                            <p><input value = {data.item1image} onChange={(e) => handle(e)} type="text" name="item1image" id="item1image" placeholder="Item 1 Image" autoFocus /></p>
                            <p><input value = {data.item1desc} onChange={(e) => handle(e)} type="text" name="item1desc" id="item1desc" placeholder="Item 1 Description" autoFocus /></p>
                            <p><input value = {data.item2name} onChange={(e) => handle(e)} type="text" name="item2name" id="item2name" placeholder="Item 2 Name" autoFocus /></p>
                            <p><input value = {data.item2image} onChange={(e) => handle(e)} type="text" name="item2image" id="item2image" placeholder="Item 2 Image" autoFocus /></p>
                            <p><input value = {data.item2desc} onChange={(e) => handle(e)} type="text" name="item2desc" id="item2desc" placeholder="Item 2 Description" autoFocus /></p>
                            <p><input value = {data.item3name} onChange={(e) => handle(e)} type="text" name="item3name" id="item3name" placeholder="Item 3 Name" autoFocus /></p>
                            <p><input value = {data.item3image} onChange={(e) => handle(e)} type="text" name="item3image" id="item3image" placeholder="Item 3 Image" autoFocus /></p>
                            <p><input value = {data.item3desc} onChange={(e) => handle(e)} type="text" name="item3desc" id="item3desc" placeholder="Item 3 Description" autoFocus /></p>
                            <p><button  className="button" onClick={PostData}>Register</button></p>
                        </div>
                        </form> 
                    </div>
                </div>
            
        </>
    )
}
