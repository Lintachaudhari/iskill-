import React from "react"
import "./contact.scss"

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name} ${this.state.email}!`)
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <input className="form-control"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className="form-group">
                <input className="form-control"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
            </div>
            <div className="form-group">
                <textarea className="form-control"
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                />
            </div>
            <div>
                <button className="form-control btn" type="submit">Submit</button>
            </div>
            
        </form>
    )
  }
}


