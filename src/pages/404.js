import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const NotFound = () => {
    return (
        <Layout>
            <Head title="404: not found" />
            <h1>oops... page not found! sad faes :(</h1>
            <p>to head back to the home page, click <Link to="/">here</Link>!</p>
        </Layout>
    )
}

export default NotFound;