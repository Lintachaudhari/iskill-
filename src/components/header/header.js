import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./header.scss"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import IskyllIcon from "../../images/isk.svg"
import { Form } from "semantic-ui-react"

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        service: allMarkdownRemark(
          filter: { frontmatter: { posttype: { eq: "service" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              excerpt
              timeToRead
              frontmatter {
                title

                date
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header className="bg-light fixed-top header-shadow">
        <div className="container">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <Link to="/" style={{ color: `#0c2e8a`, textDecoration: `none` }}>
                <img src={IskyllIcon} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about_us" className="nav-link">
                  About Us
                </Link>
                <Link to="/program" className="nav-link">
                  Porgram
                </Link>
                <NavDropdown title="Services">
                  <NavDropdown.Item>
                    <Link to="/services/#buildTeam"> Build Your Product</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/services/#platform">Build Your Team</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/services/#getStarted">Hire Your Team</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Link to="/reskyll" className="nav-link">
                  ReSkyll
                </Link>
                <Link to="/contact_us" className="nav-link">
                  Contact Us
                </Link>
              </Nav>
              <Form>
                <Link to="/signup" style={{ color: `#0c2e8a` }}>
                  <button title="Sign Up" className="outline-btn">
                    Sign Up
                  </button>
                </Link>
                <Link to="/singin" style={{ color: `#FFFFFF` }}>
                  <button title="Sign In" className="fill-btn ml-3">
                    Sign In
                  </button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
