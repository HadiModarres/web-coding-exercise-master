import React from 'react'

class Header extends React.Component{

  render() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h2 className="navbar-brand font-weight-bold" href="#">{this.props.title}</h2>
    </nav>
  }
}

export default Header;