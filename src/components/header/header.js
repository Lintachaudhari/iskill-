import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./header.scss"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import IskyllIcon from "../../images/isk.svg"
import { Form } from "semantic-ui-react"
import NavLink from "react-bootstrap/NavLink"

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
        <div className="container-fluid">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <Link to="/" style={{ color: `#0c2e8a`, textDecoration: `none` }}>
                <img src={IskyllIcon} width="102" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto mr-5">
                <Link to="/about_us" className="nav-link">
                  About Us
                </Link>
                <Link to="/program" className="nav-link">
                  Program
                </Link>
                <Link to="/hire-iskill-grad" className="nav-link active">
                  Hire a iSkyll Grad
                </Link>

                {/* <NavDropdown title="Services"className="iskyll-drop-down">
                     <Link to="/services/#buildTeam"> Build Your Product</Link>
                    <Link to="/services/#platform">Build Your Team</Link>
                    <Link to="/services/#getStarted">Hire Your Team</Link>
                </NavDropdown> */}
                <Link to="/reskyll" className="nav-link">
                  ReSkyll
                </Link>
                {/* <Link to="/contact_us" className="nav-link">
                  Contact Us
                </Link> */}
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
