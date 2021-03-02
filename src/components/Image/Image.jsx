import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Image = ({ filename, alt, cat }) => (
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
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      switch (cat) {
        case 'link':
          if (!image.node.childImageSharp && image.node.extension === 'svg') {
            return <Img className="App-Links-image" src={image.node.publicURL} alt={alt} />
          }

          let imageFluid = image.node.childImageSharp.fluid;
          return <Img className="App-Links-image" alt={alt} fluid={imageFluid} />;

        case 'project':
          if (!image.node.childImageSharp && image.node.extension === 'svg') {
            return <Img className="App-project-screenshot" src={image.node.publicURL} alt={alt} />
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

Image.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  cat: PropTypes.string,
};

export default Image;