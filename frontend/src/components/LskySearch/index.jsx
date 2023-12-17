import LskyMatIcon from "../LskyMatIcon";
import LskyInput from "../LskyInput";
import "./styles.scss";
const Search = (props) => {
  return (
    <div className={`search ms-auto ${props.size}`}>
      <LskyMatIcon name="search" />
      <LskyInput {...props} className="search-input" iref={props.sref} />
    </div>
  );
};
export default Search;
