import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";
import * as errorStyles from "./404.module.scss";

const NotFound = () => {
    return (
        <Layout>
            <Head title="404: not found" />
            <div className={errorStyles.container}>
                <h1>oops... page not found! sad faes :(</h1>
                <p>to head back to the home page, click <Link to="/">here</Link>!</p>
            </div>
        </Layout>
    )
}

export default NotFound;