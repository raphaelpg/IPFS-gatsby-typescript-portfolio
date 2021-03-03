import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

interface ImageProp {
  filename: string,
  alt: string,
  cat: string
}

const Image = ({ filename, alt, cat }: ImageProp) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              publicURL
              extension
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image: any = data.images.edges.find((n: any) => n.node.relativePath.includes(filename));

      if (!image) return null;

      switch (cat) {
        case 'link':
          if (!image.node.childImageSharp && image.node.extension === 'svg') {
            return <Img className="App-Links-image" fluid={image.node.publicURL} alt={alt} />
          }

          let imageFluid = image.node.childImageSharp.fluid;
          return <Img className="App-Links-image" alt={alt} fluid={imageFluid} />;

        case 'project':
          if (!image.node.childImageSharp && image.node.extension === 'svg') {
            return <Img className="App-project-screenshot" fluid={image.node.publicURL} alt={alt} />
          }

          imageFluid = image.node.childImageSharp.fluid;
          return <Img className="App-project-screenshot" alt={alt} fluid={imageFluid} />;

        case 'stack':
          return <img className="App-tech-logo" alt={alt} src={image.node.publicURL} />;

        default:
          return;
      }
    }}
    
  />
);

export default Image;