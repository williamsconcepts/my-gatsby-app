import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
    return (
    <Layout>
        <h1>Hello.</h1>
        <h2>Williams from Nigeria, Today i am learning how to use Gatsby</h2>
        <p>Need an Developer? <Link to="/contact">Contact Me</Link></p>
    </Layout>

    )
}

export default IndexPage;
