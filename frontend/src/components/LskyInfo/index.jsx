import React from "react";
import LskyMatIcon from "../LskyMatIcon";
const Info = (props) => {
    const { icon, message, highlight } = props;
    const infoIcon = {
        info: "info"
    };
    return (
        <div className="alert alert-info">
            <strong>
                {infoIcon[icon] && <LskyMatIcon name={infoIcon[icon]} />}
                {highlight}
            </strong>
            {message}
        </div>
    );
};
export default Info;
