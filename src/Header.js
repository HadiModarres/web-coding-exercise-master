import React from 'react'

class Header extends React.Component{

  render() {
    return <nav className="alert alert-success">
    {this.props.title}
    </nav>
  }
}

export default Header;