import { Link } from "react-router-dom";

const MediumCard = ({data}) => {
    return (
        <Link to={{}} onClick={alert}>
            <div className="medium-card" style={{backgroundImage:'linear-gradient(rgba(0,0,0,0) 50%,black), url("'+data.image+'")'}}>
                <h6>{data.subtitle}</h6>
                <h5>{data.title}</h5>
            </div>
        </Link>
    )
}

export default MediumCard;