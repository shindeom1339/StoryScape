import React from "react";
import { CgClose, CgMenu } from "react-icons/cg";

const ToogleButton = ({ toggle, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="relative text-3xl inline-flex items-center justify-center p-2 text-[#deedca] hover:bg-[#deedca] duration-200 rounded hover:bg-opacity-10 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
        >
            {toggle ? (
                <CgClose className="duration-200" />
            ) : (
                <CgMenu className="duration-200" />
            )}
        </button>
    );
};

export default ToogleButton;