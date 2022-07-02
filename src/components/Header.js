import { Link } from "react-router-dom";

const Header = ({name, resume}) => {
    return (
        <div className="header">
            <h2>{name}</h2>
            <Link to="/search">Search</Link>
            <a href={resume}>Resume</a>
        </div>
    )
}

export default Header;