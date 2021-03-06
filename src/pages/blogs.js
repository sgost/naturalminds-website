import React from "react";
import "../styles/Blogs.scss";
import { graphql, useStaticQuery } from "gatsby"

function Blogs() {
  const data = useStaticQuery(graphql`
    query {
       blogs: file(relativePath: {eq: "blogs.md"}) {
          childMarkdownRemark {
            frontmatter {
                title
              blogs {
                id
                title
                description
                date
                image {
                  childImageSharp {
                    fluid(quality: 30) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
    }
  `)
  return (
    <>
      <div className="blog" id="blog">
        <h1 id="blog_h1">{data.blogs.childMarkdownRemark.frontmatter.title}</h1>
        <div className="blog_container">
          {data.blogs.childMarkdownRemark.frontmatter.blogs.map(blogs =>
            <div className="blog_card">
              <div className="blog_card_img">
                <img src={blogs.image.childImageSharp.fluid.src} alt="img1" />
              </div>
              <div className="blog_card_matter">
                <p id="blog_card_title" key={blogs.id}>{blogs.title}</p>
                <p id="blog_card_description" key={blogs.id}>{blogs.description}</p>
                <p id="blog_card_date" key={blogs.id}>{blogs.date}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Blogs;