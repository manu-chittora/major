import React, {useEffect} from 'react'
import { Header } from './Header';
import {useHistory} from 'react-router-dom';
export default function About() {
  const history=useHistory();
  const callAboutPage=async()=>{
    try{
      const res=await fetch('/about', {
        method:"GET", 
        headers:{
          Accept:"application/json", 
          "Content-Type":"application/json"
        },
        credentials:"include"
      })
      const data= await res.json();
      console.log(data);
      if(!res.status===200){
        const error = new Error (res.error);
        throw error;
      }
    }catch(err){
      console.log(err);
      history.push("/userlogin");
    }
  }
  useEffect(() => {
    callAboutPage();
  }, [])
  
  return (
    <div>
      <Header />
      About
    </div>
  )
}
