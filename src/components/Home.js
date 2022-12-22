import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <Header/>
    <section id="div1">
                <div className="container ">
                    <div className="align-items-center justify-content-between d-sm-flex py-4">
                        <div className="align-items-center justify-content-between text-center">
                            <h1>Make Your Own Website</h1>
                            <p>Your Online Shop is just a form away. </p>
                            <p>Register through this form, enter the shop details like  </p>
                            <p>shop name, items etc and generate a link for your CLOUD SHOP.</p>
                            <Link to="/usersignup"><button className="button" id="btn1">
                                Get started
                            </button>
                            </Link>
                        </div>
                        <div>
                            <img className="img-fluid w-78 pl-3" alt="" src="websitebuilder.svg"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="div4">
                <div className="container ">
                    <div className="align-items-center justify-content-between d-sm-flex py-4">
                        <div>
                            <img className="img-fluid pl-3 mt-4" id="svg2" alt="" src="whatsapp.svg"/>
                        </div>
                        <div className="align-items-center justify-content-between text-center">
                            <h1>Order with Whatsapp</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, dicta.</p>
                        </div>

                    </div>


                </div>

            </section>

            
            <Footer/>
    </>
  )
}
