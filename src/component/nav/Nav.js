import React from "react";
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/Cart">Cart</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/SignIn">Sign In</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="SignOut">Sign Out</Link>
                </li>
            </ul>
        </div>
    )
}