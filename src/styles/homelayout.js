import React, { useRef, useCallback } from "react";
import { useInView } from 'react-intersection-observer';
import Landing from "../components/landing";
import Header from "../components/header";

const HomeLayout = ({ children }) => {
    const ref = useRef();
    const [inViewRef, inView] = useInView();

    // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
    const setRefs = useCallback(
        (node) => {
            // Ref's from useRef needs to have the node assigned to `current`
            ref.current = node;
            // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
            inViewRef(node);
        },
        [inViewRef],
    );

    return (
        <>
        {inView ? <Header /> : null}
            <Landing />
            <div ref={setRefs}>
                {children}
            </div>
        </>
    )
}

export default HomeLayout;