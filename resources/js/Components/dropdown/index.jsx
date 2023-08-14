import React, { useState, useRef, useEffect } from "react";

function useOutsideAlerter(ref, setX) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setX(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, setX]);
}

const Dropdown = (props) => {
    const { button, children, classNames, animation } = props;
    const wrapperRef = useRef(null);
    const [openWrapper, setOpenWrapper] = useState(false);
    useOutsideAlerter(wrapperRef, setOpenWrapper);

    return (
        <div className="relative flex">
            <div className="flex" onClick={() => setOpenWrapper(!openWrapper)}>
                {button}
            </div>
            <div
                ref={wrapperRef}
                className={`${classNames} absolute z-10 ${
                    animation
                        ? animation
                        : "origin-top-right transition-all duration-300 ease-in-out"
                } ${openWrapper ? "scale-100" : "scale-0"}`}
            >
                {children}
            </div>
        </div>
    );
};

export default Dropdown;
