import React from "react";
import { graphql } from "gatsby";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as projectStyles from "./project.module.scss";

import Layout from "../components/layout";
import Head from "../components/head";

export const query = graphql`
  query contentfulProject($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      id
      name
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          contentful_id
          title
          file {
            url
          }
        }
      }
    }
  }
`;

const Project = (props) => {
    const { contentfulProject: { name, slug, publishedDate, body: { raw, references } } } = props.data
    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const imageID = node.data.target.sys.id;
          const {file: { url }, title} = references.find(({ contentful_id: id }) => {
            return id === imageID;      
          }); 
  
          return <img src={url} alt={title} />;
        },
        [INLINES.HYPERLINK]: (node) => {
          return <a href={node.data.uri} target={`${node.data.uri.startsWith("http") ? '_self' : '_blank'}`} rel={`${node.data.uri.startsWith("http://localhost:8000") ? '' : 'noopener noreferrer'}`}>{node.content[0].value}</a>;
        }
      }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulProject.name} />
            <div className={projectStyles.projectContent}>
                <h1><span>{props.data.contentfulProject.name}</span></h1>
                <p className={projectStyles.date}>project  /  {props.data.contentfulProject.publishedDate}</p>
                {documentToReactComponents(JSON.parse(props.data.contentfulProject.body.raw), options)}
            </div>
        </Layout>
    )
}

export default Project;