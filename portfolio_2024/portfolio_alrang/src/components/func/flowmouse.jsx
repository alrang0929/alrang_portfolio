import React, { useEffect, useRef } from "react";
import $ from "jquery";

function Flowmouse() {
    const circleRef = useRef(null);
    useEffect(() => {
        $(window).on("mousemove", (event) => {
            const $circle = $(circleRef.current);
            $circle.css({
                left: event.clientX + "px",
                top: event.clientY + "px",
            });

            const $target = $(event.target);
            if ($target.css("cursor") === "pointer") {
                $circle.addClass("on");
            } else {
                $circle.removeClass("on");
            }
        });

        return () => {
            $(window).off("mousemove");
        };
    }, []);
    return (
        <div>
            <div className="flowmouse" ref={circleRef} />
        </div>
    );
}

export default Flowmouse;
