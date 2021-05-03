import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";
import ProjectPanel from "../components/project-panel";
import * as projectsStyles from "./projects.module.scss"

const ProjectsPage = () => {

    const data = useStaticQuery(graphql`
    query {
      allContentfulProject (
        sort: {
            fields: publishedDate,
            order: DESC
          }
      ) {
        edges {
          node {
              name
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
              description
              topics
              image {
                  file {
                      url
                  }
              }
          }
        }
      }
    }   
  `)

    return (
        <div>
            <Layout>
                <Head title="projects" />
                <div className={projectsStyles.header}>
                    <h1>projects</h1>
                    <hr></hr>
                </div>
                <div className={projectsStyles.projectPanels}>
                    {data.allContentfulProject.edges.map((edge) => {
                        return (
                            <Link to={`/projects/${edge.node.slug}`}>
                                <ProjectPanel
                                    key={edge.node.slug}
                                    image={edge.node.image}
                                    name={edge.node.name} 
                                    description={edge.node.description}
                                    topics={edge.node.topics} 
                                />
                            </Link>
                        )
                    })}
                </div>
            </Layout>
        </div>
    )
}

export default ProjectsPage;