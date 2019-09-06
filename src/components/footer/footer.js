import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Contact from "../contact/contact" 
import "./footer.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footer {
        allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "//footer/"}}
        ) {
        edges {
            node {
            frontmatter {
                title
                date
            }
            html
            }
        }
        }
    }  
`)
  return (
      <section >
        <div className="contact">
            <div className="contact-main  py-5">
                    <div className=" container py-sm-4">
                            <div className="row contact-top">
                                <div className="col-lg col-md-6">
                                    <Contact/>
                                </div>
                                <div className="col-lg-6 col-md-6 contact-grid mt-md-0 mt-5">
                                    {data.allMarkdownRemark.edges.map(({ node }, i) => (
                                        <div key={i}>
                                              <div className="slider-content" dangerouslySetInnerHTML={{ __html: node.html }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                    </div>
            </div>
        </div>

        <div className="cpy-right-sec">
            <div className="container">
                <div className="cpy-right text-left py-3 row">
                    <p className=" footer-text col-md-8">© 2019 Organization. All rights reserved | Design by Omniwyse
                    </p>
                </div>
            </div>
        </div>
      </section>
    
  );
};

export default Footer;