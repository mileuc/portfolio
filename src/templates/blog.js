import React from "react";
import { graphql } from "gatsby";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/layout";
import * as blogStyles from "./blog.module.scss";
import Head from "../components/head";

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// const Blog = (props) => {
//     return (
//         <Layout>
//             <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//             <p>{props.data.markdownRemark.frontmatter.date}</p>
//             <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
//         </Layout>
//     )
// }

// export const query = graphql`
//   query($slug: String!){
//     contentfulBlogPost(slug: {eq: $slug}) {
//       title
//       publishedDate(formatString: "MMMM Do, YYYY")
//       body {
//         raw
//       }
//     }
//   }
// `

export const query = graphql`
  query contentfulBlogPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
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

const Blog = (props) => {

  const { contentfulBlogPost: { title, slug, publishedDate, body: { raw, references } } } = props.data
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const imageID = node.data.target.sys.id;
        const {file: { url }, title} = references.find(({ contentful_id: id }) => { //title: title
          return id === imageID;      
        }); //return the node with the matching image id

        return <img src={url} alt={title} />;
      },
      [INLINES.HYPERLINK]: (node) => {
				if (node.data.uri.indexOf('youtube.com/embed') !== -1) {
					return (
						<div className={blogStyles.videoHolder}>
							<iframe
                title={slug}
								id="ytplayer"
								src={node.data.uri}
								type="text/html"
								width="80%"
								height="320"
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture ; fullscreen"
							/>
						</div>
					);
				} else
					return (
						<a
							href={node.data.uri}
							target={`${node.data.uri.startsWith("https://youtube.com/embed") ? '_self' : '_blank'}`}
							rel={`${node.data.uri.startsWith("https://youtube.com/embed") ? '' : 'noopener noreferrer'}`}
						>
							{node.content[0].value}
						</a>
					);
			}
    }
  };

  return (
      <Layout>
        <Head title={props.data.contentfulBlogPost.title} />
        <div className={blogStyles.blogPostContent}>
          <h1><span>{props.data.contentfulBlogPost.title}</span></h1>
          <p className={blogStyles.date}>blog  /  {props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}
        </div>
      </Layout>
  )
}

export default Blog;

