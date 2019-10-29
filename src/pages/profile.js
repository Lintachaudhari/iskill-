import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"

const Profile = () => (
  <StaticQuery
    query={graphql`
      query {
        mongodb: allMongodbProfileStudents {
          edges {
            node {
              name
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className="container py-sm-4">
          {data.mongodb.edges.map(({ node }, i) => (
            <div className="card mb-5">
              <div className="card-body">
                <h4 className="card-title">{node.name}</h4>
                <p className="card-text">{node.designation}</p>
                <p className="card-text">{node.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
)

export default Profile
