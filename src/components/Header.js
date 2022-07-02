import { Link } from "react-router-dom";
import pdf from '../data/resume.pdf';

const Header = ({name}) => {
    return (
        <div className="header">
            <h2><Link to="/">{name}</Link></h2>
            <div className="header-buttons">
                <Link to="/search">Search</Link>
                <a href={pdf} without rel="noopener noreferrer" target="_blank">Resume</a>
            </div>
        </div>
    )
}

export default Header;