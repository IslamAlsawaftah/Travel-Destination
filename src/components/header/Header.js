import React from 'react'
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <nav>
                {/* use link instead of a attribute */}
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
};

export default Header;