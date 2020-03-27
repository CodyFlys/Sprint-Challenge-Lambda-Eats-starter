import React from 'react';
import Form from './pizza';
import {Link} from "react-router-dom";

const Home = () => {
    
    return (
        <div>
            <Link to="/">
                <button>Home</button>
            </Link>

            <Link to={"/pizza"}>
                <button>Pizza?</button>
            </Link>
        </div>
    )
}

export default Home