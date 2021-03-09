import React from "react"

import SEO from "../components/seo"
import App404 from "../components/App404"

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Not found" />
    <App404 />
  </>
)

export default NotFoundPage