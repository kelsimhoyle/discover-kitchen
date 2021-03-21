import React from "react";
import { Link } from "gatsby";
import { HiOutlineArrowNarrowRight } from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";

const Btn = ({ children, to }) => {
    return (
        <Link
            to={to}
            className="button is-large is-medium"
        >
            {children}
            <span className="icon  is-large ml-1">
                <HiOutlineArrowNarrowRight />
            </span>
        </Link>
    );
};

export default Btn;