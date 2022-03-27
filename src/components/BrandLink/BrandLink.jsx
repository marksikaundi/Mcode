import React from 'react';
import { Link } from 'react-router-dom';

const BrandLink = ({ classes }) => (
    <Link className={`text-2xl font-krona ${classes}`} to="/">
        Mcode
    </Link>
);

export default BrandLink;
