import React from "react";
import moment from "moment";

const LskyDateView = (props) => {
    let format = "DD-MM-YYYY";

    const dateFrmt = {
        DAYMONTHYEAR: "DD-MM-YYYY",
        DAYFULLMONTHYEAR: "DD-MMM-YYYY",
        DAYMONTHYEARWITHTIME: "DD-MM-YYYY, hh:mm a",
        DAYFULLMONTHYEARWITHTIME: "DD-MMM-YYYY, hh:mm a"
    };

    if (props.format && dateFrmt[props.format]) {
        format = dateFrmt[props.format];
    }
    let frmtdDt = moment(moment.utc(props.date)).format(format);

    return <>{frmtdDt}</>;
};

export default LskyDateView;
