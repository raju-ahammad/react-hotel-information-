import React, { Component } from 'react'
import { FaAlignRight } from "react-icons/fa"
import { Link } from 'react-router-dom'
import logo from "../../images/logo.svg"

class Navbar extends Component {

    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <nav className="navabr">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                        <img src={ logo } alt=""/>
                        </Link>
                        <button type="button" onClick={this.handleToggle} className="nav-btn">
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav": "nav-links"} >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
