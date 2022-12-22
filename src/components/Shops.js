import React, {useEffect, useState} from 'react';
import { Header } from './Header';
function Profile(params) {
    // console.log(params);
    // console.log(params.match.params.email);
    const [myemail, setEmail]=useState("");
    const [myname, setName]=useState("");
    const fetchData = async () => {
        
        const res=await fetch(`/profile/${params.match.params.email}`, {
            method:"GET", 
            headers:{
              Accept:"application/json", 
              "Content-Type":"application/json"
            },
            credentials:"include"
        })
        const data= await res.json();
        if(data.user.email)
        {
            setName(data.user.name);
            setEmail(data.user.email);
        }
         console.log(data);
        }

    useEffect(() => {
        fetchData();
      }, [])

  return (
      <>
      <Header/>
    <div>
      <h1>Profile for {myname}</h1>
      <ul>
        <li>Email address: {myemail}</li>
      </ul>
    </div>
    </>
  )
}

export default Profile;