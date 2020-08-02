import React, { useContext} from 'react';
import "./nav.css"
import { MovieContext } from "./movieContext"

function Nav() {
    const [movies] = useContext(MovieContext);
    return (
        <div className="nav">
            <h3>MagKissi</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    )
}

export default Nav
