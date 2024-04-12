import React from "react";
import { Roboto } from "next/font/google";
import styles from "./page2.css"
import "../globals.css";



export default function Home() {
  return (
    <section className="container">
      <div className="content">
        <h1 className="title">I am Spencer Garcia a College Student</h1>
        <p className="description">
          I am from Bolivia, but I currently live in Utah, United States. I am 24 years with 2 years on college doing a Bachelor's of Software development. Almost finishing my first certificate in software engineering, I have some experience in Java but with more skill in JavaScript. With good wishes to continue expanding my skills and knowledge in the world of technology and programming to make this a better world.
        </p>
        <p className="description2">
          Any way to contact me, there is my Linkedin account and my Github, also my Gmail.
        </p>
      </div>
      <div className="right-container">
        <img src="/AboutPrfl.png" alt="My prof picture" className="myImg" />
        <div className="btn-container">
          <img src="/Github.png" alt="G picture" className="Git" />
          <a href="https://github.com/LSG2024" className="contactBtn">Follow me on Github</a>
          <img src="/Linkedin.png" alt="Link picture" className="Link" />
          <a href="https://www.linkedin.com/in/spencer-garcia-b79b80252?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVSkQubQaQyG5Yb4jnc0P7g%3D%3D" className="contactBtn2">Follow me on Linkedin</a>
          <img src="/Gmail.png" alt="My prof picture" className="myImg" />
          <a href="mailto:luispencerg@gmail.com" className="contactBtn3">Send me an email</a>
        </div>
      </div>
    </section>
  );
}

