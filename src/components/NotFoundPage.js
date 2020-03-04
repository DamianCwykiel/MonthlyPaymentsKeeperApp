import React from 'react';
import {Link} from 'react-router-dom';

export const NotFoundPage = () => (
    <div className="content-container__edit">
        <h4 className="header__title">
             <b>404! - Page not found.</b>
        </h4>
            <Link to='/'>Home Page</Link>
    </div>
);
export default NotFoundPage;