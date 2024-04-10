import Image from 'next/image';
import styles from "./page.css"
import global from "./globals.css"

export default function Home() {
  return (
    <section className= "container">
      <div className= "content">
        <h1 className= "Title">Hi, I am Spencer</h1>
        <p className= "Description">
          I am a Software developer 
          </p>
          <a href= "mailto:luispencerg@gmail.com" className= "contactBtn">Contact me</a>
      </div>
      <img src= "/prof.png" alt= "My prof picture" className= "myImg"/>
    </section>
  );
}
