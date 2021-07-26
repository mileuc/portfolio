import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import * as aboutStyles from "./about.module.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="about" />
                <div className={aboutStyles.description}>
                    <h1>who is michael?</h1>
                    <p>Hello! I am a 2017 Electrical Engineering Graduate from the University of Calgary. Since graduating, I have worked as an Engineering Intern for an aerial data acquisition and geospatial data processing company and as a Project Assistant for a management system consulting company. </p>
                    
                    <p>
                    During the COVID-19 pandemic, I have renewed the passion I had in school for learning new skills after taking Barbara Oakley's "<a className={aboutStyles.link} href="https://www.coursera.org/learn/mindshift" target="_blank" rel="noreferrer">Mindshift</a>" course on Coursera. This course has taught me to realize the value in adopting a learning lifestyle, to broaden my passions, and to embrace the idea that personal traits I have previously seen as bad for learning can actually be beneficial traits.
                    </p>

                    <p>
                    After completing "Mindshift", this experience has pushed me to keep my mind active and stay busy. Instead of continuing to just sample free Python coding courses on <a className={aboutStyles.link} href="https://www.codecademy.com/learn/learn-python" target="_blank" rel="noreferrer">CodeAcademy</a>, or learning from <a className={aboutStyles.link} href="https://www.linkedin.com/posts/data-science-central_learn-python-in-3-days-step-by-step-guide-activity-6660540746942214144-XSme" target="_blank" rel="noreferrer">small programming articles</a> on websites like Data Science Central, I have fully committed to adding more tools to my toolbox by enrolling in online programming courses to build real <a className={aboutStyles.link} href="/projects" target="_blank" rel="noreferrer">projects</a>. I have completed "<a className={aboutStyles.link} href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noreferrer">The Complete 2021 Web Development Bootcamp</a>" on Udemy, where I got the opportunity to develop skills in Full-Stack Web Development through building a variety of Web applications. Currently, I am taking the 
                    "<a className={aboutStyles.link} href="https://www.udemy.com/course/100-days-of-code/" target="_blank" rel="noreferrer">100 Days of Code</a>" Python Bootcamp to build various projects in Web Development, Automation, Web Scraping, Gaming, and Data Science using Python. Both of these courses have been excellent for a beginner like myself, and have helped build a solid base of knowledge and confidence that I can learn from any resource.
                    </p>

                    <p>
                    Right now, I would like to gain exposure to many different areas inside and outside of programming - especially Engineering, Automation, Web Development, Project Assistance, and Data Exploration and Visualization. Once I gain enough experience in these different areas, hopefully I will have found a role that I like and begin to grow into that specific role. Eventually, I would like to further expand my skill set by learning about other languages like Ruby on Rails, and build simple projects that would tie into my passions. 
                    </p>
                    
                    <p>
                    In my spare time, I am an avid fan of Hockey, Basketball, and Mixed Martial Arts. I also love Photoshop, Poker, biking, long walks, board games, game shows, sitcoms, and trying different kinds of food. I am always seeking completed projects on these topics for inspiration on new project ideas in the future. I also enjoy volunteering for organizations like Sport Calgary, which gives children an opportunity to discover a new sport and promotes active living.
                    </p>
                    
                    <p>
                    I didn't necessarily start learning programming with the goal of becoming a Software Developer, as I was simply taking advantage of an opportunity to add skills during an unprecedented time. I have no idea where learning programming will take me, or if it will even lead to anything. However, I have enjoyed the journey so far and I am proud of the projects I have worked on! Creating this <a className={aboutStyles.link} href="/projects/portfolio-site" target="_blank" rel="noreferrer">portfolio website</a> in particular has been extremely rewarding as an outlet for applying my problem-solving skills, creativity, and all the programming concepts I have learned to date. 
                    </p>
                    
                    <p>
                    Have an opportunity in Engineering, Tech, or somewhere else where I could potentially apply the bits of knowledge I have gained thus far and grow into a specific role? Need a copy of my resume? Interested in learning more about me and my background? Or did you want to just say hello? Feel free to contact me! → 
                    <a className={aboutStyles.icon} href="https://www.linkedin.com/in/milecal/" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="linkedin"> <FaLinkedin /></a>
                    <a className={aboutStyles.icon} href="mailto: mileuc95@gmail.com" target="_blank" rel="noreferrer" title="Email" aria-label="email"><FaEnvelope /></a>
                    </p>
                </div>
            </Layout>
        </div>
    )
}

export default AboutPage;