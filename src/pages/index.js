import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";
import * as indexStyles from "./index.module.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import ParticleBackground from "../components/particle-background";

const IndexPage = () => {
  return (
    <Layout>
        <Head title="home" />
        <div className={indexStyles.home}>
          <ParticleBackground />
          <div className={indexStyles.content}>
            <h5><a className={indexStyles.link} href="https://youtu.be/8UX4GAk77zk?t=84" target="_blank" rel="noreferrer" title="it's funnier if your browser autoplays videos!">hello!</a></h5>
            <h1>i'm michael!</h1>
            <h5>an engineering graduate who's currently exploring the great world of programming during the COVID-19 pandemic.</h5>
            <p>
              wanna talk? say hi! → 
              <a className={indexStyles.icon} href="https://www.linkedin.com/in/milecal/" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="linkedin"> <LinkedInIcon fontSize="small" /></a>
              <a className={indexStyles.icon} href="mailto: mileuc95@gmail.com" target="_blank" rel="noreferrer" title="Email" aria-label="email"><EmailIcon fontSize="small" /></a>
            </p>
            <p>
              here, you can check out my <Link className={indexStyles.link} to="/projects">projects</Link>! → 
              <a className={indexStyles.icon} href="https://www.github.com/mileuc" target="_blank" rel="noreferrer" title="GitHub" aria-label="github"> <GitHubIcon fontSize="small" /></a>
            </p>
            <p>
              you can also learn more <Link className={indexStyles.link} to="/about">about</Link> me or check out my <Link className={indexStyles.link} to="/blog">random musings</Link>!
            </p>
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage;