import React from "react";

const Wrapper = ({ children }) => {
    return (
        <div className="container mx-auto py-4 px-2 h-screen ">{children}</div>
    );
};

export default Wrapper;