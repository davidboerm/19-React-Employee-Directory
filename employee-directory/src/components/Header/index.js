import React from "react";
import "./style.css";

const Header = () => {
    return (
        <header className="col-12">
            <h1 className="text-center">Employee Directory</h1>
            <h6 className="text-center">Search by first or last name or click <em>Name</em> to sort A-Z by first name.</h6>
        </header>
    );
};

export default Header;