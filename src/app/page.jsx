import Image from 'next/image';
import styles from "./page.css"
import global from "./globals.css"
import WorkWidget from "../components/WorkWidget/WorkWidget"
import SkillsWidget from "../components/SkillsWidget/SkillsWidget"

export const metadata = {
  title: 'Portfolio - Home',
  description: 'The projects page of my portfolio.',
}


const skills = [
  { name: 'Microsoft', proficiency: 60, icon: 'microsoft.png' },
  { name: 'Java', proficiency: 50, icon: 'Java.png' },
  { name: 'JavaScript', proficiency: 75, icon: 'javaS.png' },
];

export default function Home() {
  return (
    <section className= "container">
      <div className= "content">
        <h1 className= "title">Hi, I am Spencer</h1>
        <p className= "description">
          I am a Software developer 
        </p>
        <a href= "mailto:luispencerg@gmail.com" className= "contactBtn">Contact me</a>
        <WorkWidget
          title={'Studies '}
          content={'My education experience.'}
          experiences={[
            {
              logo: '/EnsignCollege.png',
              organization: 'Ensign college',
              jobTitle: 'Software Engineering',
              startYear: 2022,
              endYear: null,
            },
            {
              logo: '/Byu.png',
              organization: 'BYU',
              jobTitle: 'English Language',
              startYear: 2020,
              endYear: 2022,
            },
            {
              logo: '/path.png',
              organization: 'Pathway Connect',
              jobTitle: 'Bussiness Management',
              startYear: 2020,
              endYear: 2020,
            },
            
          ]}
        />
        <SkillsWidget
        title={'Skills'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
        skills={skills}
      />
        
      </div>
      <img src= "/prof.png" alt= "My prof picture" className= "myImg"/>
    </section>
  );
}
