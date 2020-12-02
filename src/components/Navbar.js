import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollPos: window.pageYOffset,
      visible: true
    }
  }

  // Mounts component when user is scrolling
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Unmounts component when user is not scrolling
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible
    });
  }

  render() {
    const { toggleSidebar } = this.props;
    return <nav className={`navbar ${this.state.visible ? "" : "navbar--hidden"}`}>
      <div className="nav-center">
        <div className="nav-header">
          <button type="button" className="toggle-btn" 
          onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  }
}