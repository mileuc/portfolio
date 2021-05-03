//this file was orginally for Gatsby Node APIs to create slugs for markdown posts and pages
//later adjusted to get slugs from contentful posts and create pages.
const path = require("path");

// module.exports.onCreateNode = ({node, actions}) => {
//     const { createNodeField } = actions;

//     if(node.internal.type === "MarkdownRemark") {
//         const slug = path.basename(node.fileAbsolutePath, ".md");

//         createNodeField({
//             node,
//             name: "slug",
//             value: slug
//         });

//         console.log("@@@@@@", slug);
//         //console.log(JSON.stringify(node, undefined, 4));
//     }
// }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    //1. Get path to templates
    const blogTemplate = path.resolve("./src/templates/blog.js");
    const projectTemplate = path.resolve("./src/templates/project.js");

    // 2. Get contentful blog post data
    const resBlogPost = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    // 2. Get contentful project data
    const resProject = await graphql(`
        query {
            allContentfulProject {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    // 3. Create new pages
    resBlogPost.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`, 
            context: {
                slug: edge.node.slug
            }
        })
    })

    resProject.data.allContentfulProject.edges.forEach((edge) => {
        createPage({
            component: projectTemplate,
            path: `/projects/${edge.node.slug}`, 
            context: {
                slug: edge.node.slug
            }
        })
    })
}

