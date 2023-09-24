import React from "react";
import SquarebagelDesktop from "./SquarebagelDesktop";
import SquarebagelMobile from "./SquarebagelMobile";

export const App = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <>{isMobile ? <SquarebagelMobile /> : <SquarebagelDesktop />}</>;
};
