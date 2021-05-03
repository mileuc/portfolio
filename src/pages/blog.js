import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as blogStyles from "./blog.module.scss";
import Head from "../components/head";


const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
            fields: publishedDate,
            order: DESC
          }
      ) {
        edges {
          node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
              preview {
                  raw
              }
          }
        }
      }
    }   
  `)

    //console.log(data); 
    
    return (
        <div>
            <Layout>
                <Head title="blog" />
                <div className={blogStyles.headers}>
                    <h1>blog</h1>
                    <h2>latest posts</h2>
                    <hr></hr>
                </div>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <h2>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        {edge.node.title}
                                    </Link>
                                </h2>
                                <div className={blogStyles.postPreview}>
                                    {documentToReactComponents(JSON.parse(edge.node.preview.raw))}
                                </div>
                                <div className={blogStyles.bottomLine}>
                                    <p>{edge.node.publishedDate}</p>
                                    <p>
                                        <Link to={`/blog/${edge.node.slug}`}>
                                            Read More →
                                        </Link>
                                    </p>
                                </div>
                                <hr></hr>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage;