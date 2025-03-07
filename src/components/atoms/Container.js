import { Children } from "react";
import Grid2 from "./Grid2";

function Container({children = null}) {
    return (
        <div className="wrapper-container">
            {children}
        </div>
    )
}

export default Container;