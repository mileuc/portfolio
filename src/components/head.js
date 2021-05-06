import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby"; 

const Head = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <Helmet title={`${props.title} | ${data.site.siteMetadata.author}`} />
    )
}

export default Head;