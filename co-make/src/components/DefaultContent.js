import React, { useEffect } from "react";
import { gsap } from 'gsap';

function DefaultContent() {

    useEffect(() => {
        gsap.timeline()
            .fromTo("#sp2", {opacity: 0}, {duration: 1, opacity: 1})
            .fromTo("#sp4", {opacity: 0}, {duration: 1, opacity: 1})
            .fromTo("#sp3", {opacity: 0}, {duration: 1, opacity: 1})
            .fromTo("#sp1", {opacity: 0}, {duration: 1, opacity: 1})
            .fromTo("#sp5", {opacity: 0}, {duration: 1, opacity: 1})
    }, []);

    return (
        <div style={{ minHeight: "350px" }}>
            <h3 id="tagline" style={{ textAlign: "center" }}>
                <span id="sp1">Imagination.</span> 
                <span id="sp2">Creativity.</span> 
                <span id="sp3">Proactive.</span> 
                <span id="sp4">Vision.</span> 
                <span id="sp5">Clarity.</span>
            </h3>
        </div>
    )
}

export default DefaultContent;