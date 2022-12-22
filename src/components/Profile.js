import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import "./profile.css"
function Profile(params) {
    // console.log(params);
    // console.log(params.match.params.email);
    // item1name:  "",
    // item1image: "",
    // item1desc:  "",
    // item2name:  "",
    // item2image: "",
    // item2desc:  "",
    // item3name:  "",
    // item3image: "",
    // item3desc:  "",

    const [myemail, setEmail] = useState("");
    const [myname, setName] = useState("");
    const [myshopaddress, setAddress] = useState("");
    const [myphone, setPhone] = useState("");
    const [myshopdescription, setShopdescription] = useState("");
    const [myshopimage, setShopimage] = useState("");
    const [myitem1name, setitem1name] = useState("");
    const [myitem2name, setitem2name] = useState("");
    const [myitem3name, setitem3name] = useState("");
    const [myitem1image, setitem1image] = useState("");
    const [myitem2image, setitem2image] = useState("");
    const [myitem3image, setitem3image] = useState("");
    const [myitem1desc, setitem1desc] = useState("");
    const [myitem2desc, setitem2desc] = useState("");
    const [myitem3desc, setitem3desc] = useState("");

    const fetchData = async () => {
        const res = await fetch(`/profile/${params.match.params.email}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        const data = await res.json();
        if (data.user.email) {
            setName(data.user.name);
            setEmail(data.user.email);
            setAddress(data.user.shopaddress);
            setShopdescription(data.user.shopdescription);
            setPhone(data.user.phone);
            setShopimage(data.user.shopimage)
            setitem1name(data.user.item1name)
            setitem2name(data.user.item2name)
            setitem3name(data.user.item3name)
            setitem1image(data.user.item1image)
            setitem2image(data.user.item2image)
            setitem3image(data.user.item3image)
            setitem1desc(data.user.item1desc)
            setitem2desc(data.user.item2desc)
            setitem3desc(data.user.item3desc)
        }
        // console.log(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Header />
            <section class=" text-center">
                <div id="div1">
                    <div class="container text-center" id="div2">
                        <div id="div3">

                            <div class="row align-items-center justify-content-center d-flex" id="row1">
                                <h1 id="h1">
                                    <b>{myname}</b>
                                </h1>
                               
                            </div>
                            <p>Shop Address: {myshopaddress}</p>
                            <p>Shop Phone: {myphone}</p>
                            <p>{myshopdescription}</p>
                            <div class="row align-items-center" id="row2">
                            
                            </div>
                            <p>
                                <img src={myshopimage} id="img1" />
                            </p>
                            <div className='row jsutify-content-evenly d-flex class2'>

                                <div className='col-4'>
                                    <h1>Items</h1>
                                    <img src={myitem1image} id="img2"/>
                                    {myitem1name}

                                </div>
                                <div className='col-4'>
                                    <h1>Your Cart</h1>
                                    <img src={myitem2image} id="img2"/>
                                    {myitem2name}
                                    <a href='https://wa.me/919041012201?text=Hello'><button>ORDER NOW</button></a>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            {/* <div>
                <h1>Profile for {myname}</h1>
                <ul>
                    <li>Email address: {myemail}</li>
                </ul>
                <ul>
                    <li> Address: {myshopaddress}</li>
                </ul>
                <ul>
                    <li> Contact Number: {myphone}</li>
                </ul>
                <ul>
                    <li> Item 1- {myitem1name}</li>
                </ul>
                <ul>
                    <li>  {myitem1desc}</li>
                </ul>


            </div> */}
        </>
    )
}

export default Profile;