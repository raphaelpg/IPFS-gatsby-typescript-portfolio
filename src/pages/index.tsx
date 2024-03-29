import React from "react"

import SEO from "../components/seo"
import App from "../components/App"
import "../style/main.scss"

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home" />
    <App />
  </>
)

export default IndexPage
