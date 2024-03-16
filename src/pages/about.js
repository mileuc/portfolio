import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import * as aboutStyles from "./about.module.scss"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="about" />
        <div className={aboutStyles.description}>
          <h1>who is michael?</h1>
          <p>
            Hello! I am a Masters of Software Engineering graduate from the
            University of Calgary. Since earning my undergraduate degree in
            Electrical Engineering in 2017, I have worked as an Engineering
            Intern for an aerial data acquisition and geospatial data processing
            company and as a Data Analyst for a management system consulting
            company in the Oil & Gas industry.{" "}
          </p>

          <p>
            My journey into the world of tech officially started during the
            COVID-19 pandemic, where I have renewed the passion I had in school
            for learning new skills after taking Barbara Oakley's "
            <a
              className={aboutStyles.link}
              href="https://www.coursera.org/learn/mindshift"
              target="_blank"
              rel="noreferrer"
            >
              Mindshift
            </a>
            " course on Coursera. This course has taught me to realize the value
            in adopting a learning lifestyle, to broaden my passions, and to
            embrace the idea that personal traits I have previously seen as bad
            for learning can actually be beneficial traits.
          </p>

          <p>
            After completing "Mindshift", this experience has pushed me to keep
            my mind active and stay busy. Instead of continuing to just sample
            free Python coding courses on{" "}
            <a
              className={aboutStyles.link}
              href="https://www.codecademy.com/learn/learn-python"
              target="_blank"
              rel="noreferrer"
            >
              CodeAcademy
            </a>
            , or learning from{" "}
            <a
              className={aboutStyles.link}
              href="https://www.linkedin.com/posts/data-science-central_learn-python-in-3-days-step-by-step-guide-activity-6660540746942214144-XSme"
              target="_blank"
              rel="noreferrer"
            >
              small programming articles
            </a>{" "}
            on websites like Data Science Central, I have fully committed to
            adding more tools to my toolbox by enrolling in online programming
            courses to build real{" "}
            <a
              className={aboutStyles.link}
              href="/projects"
              target="_blank"
              rel="noreferrer"
            >
              projects
            </a>
            . I have completed "
            <a
              className={aboutStyles.link}
              href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
              target="_blank"
              rel="noreferrer"
            >
              The Complete 2021 Web Development Bootcamp
            </a>
            " on Udemy, where I got the opportunity to develop skills in
            Full-Stack Web Development through building a variety of Web
            applications. I have also taken the "
            <a
              className={aboutStyles.link}
              href="https://www.udemy.com/course/100-days-of-code/"
              target="_blank"
              rel="noreferrer"
            >
              100 Days of Code
            </a>
            " Python Bootcamp to build various projects in Web App Development,
            Desktop App Development, Automation, Web Scraping, Gaming, and Data
            Science using Python. Both of these courses have been excellent for
            a beginner like myself, and have helped build a solid base of
            knowledge and confidence that I can learn from any resource.
          </p>

          <p>
            I have been able to use these newly acquired skills to contribute as
            Data Analyst at The Mustard Seed, where I was able to apply my
            newfound knowledge to help the data team gain insights into donation
            data and present them for donor relations, marketing, and
            fundraising teams to help them optimize their processes. Eventually,
            my desire to further refine my skills under the guidance of
            experienced Software and Machine Learning Engineers motivated me to
            enroll in the Masters of Software Engineering program at the
            University of Calgary in 2022, where I have gained exposure to many
            different areas in tech - especially Full-Stack Software
            Development, Machine Learning and Deep Learning, and Data Analysis.
            In the future, I would like to continue further expanding my skill
            set by learning about other languages/frameworks like Django and
            Ruby on Rails, and build simple projects that would tie into my
            passions.
          </p>

          <p>
            In my spare time, I enjoy yoga, learning to play guitar, trying
            different kinds of food (and hot sauces!) around the city, getting
            lost in Wikipedia rabbit holes, playing around on PhotoShop, and
            binge-watching sitcoms, crime dramas, reality shows, and crime
            dramas. I am also an avid fan of Hockey and Basketball, and I am
            always seeking inspiration for potential ideas on these topics for
            personal projects in the future. I also enjoy volunteering for
            organizations like Sport Calgary, which gives children an
            opportunity to discover a new sport and promotes active living.
            Additionally, I am always seeking new ways to upgrade and refine my
            skill set through online courses.
          </p>

          <p>
            I didn't necessarily start learning programming with the singular
            goal of becoming a Software Developer, as I was simply taking
            advantage of an opportunity to add skills during an unprecedented
            time. I did not expect this journey to lead me back to school and
            getting a Masters in Software Engineering, but I have enjoyed every
            moment of it so far and I am proud of the projects I have worked on!
            Creating this{" "}
            <a
              className={aboutStyles.link}
              href="/projects/portfolio-site"
              target="_blank"
              rel="noreferrer"
            >
              portfolio website
            </a>{" "}
            in particular has been extremely rewarding as an outlet for applying
            my problem-solving skills, creativity, and all the programming
            concepts I have learned to date. My interests lie in Data Analysis,
            Full Stack Development, Software Engineering, and Teaching.
          </p>

          <p>
            Have an opportunity in Engineering, Tech, or somewhere else where I
            could potentially apply the bits of knowledge I have gained thus far
            and grow into a specific role? Need a copy of my resume? Interested
            in learning more about me and my background? Or did you want to just
            say hello? Feel free to contact me! →
            <a
              className={aboutStyles.icon}
              href="https://www.linkedin.com/in/milecal/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              aria-label="linkedin"
            >
              {" "}
              <FaLinkedin />
            </a>
            <a
              className={aboutStyles.icon}
              href="mailto: mileuc95@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="Email"
              aria-label="email"
            >
              <FaEnvelope />
            </a>
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage
