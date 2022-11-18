import React from "react";
import {Link} from 'react-router-dom'


const NotFoundPage = () => (
    <div>
        <h1>ERROR 404!</h1>
        <h3>PAGE NOT FOUND</h3>
        {/*use Link/NavLink to link internal pages*/}
        <Link to='/'>Back to Dashboard</Link>
    </div>
)

export default NotFoundPage