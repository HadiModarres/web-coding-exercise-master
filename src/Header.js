import React from 'react'

class Header extends React.Component{

  render() {
    return <header className="f2 pv3 ph4 bg-light-purple white flex-grow-0 flex-shrink-0">
      {this.props.title}
    </header>
  }
}

export default Header;