import React from 'react'

class Header extends React.Component{

  render() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">{this.props.title}</a>
    </nav>
  }
}

export default Header;