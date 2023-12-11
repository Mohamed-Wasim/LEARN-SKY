import "./styles.scss";
const LskyFormHeader = (props) => {
    return <p {...props}>{props.t(props.text)}</p>;
};

export default LskyFormHeader;
