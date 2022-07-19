import { Link } from "react-router-dom";

const MediumCard = ({data}) => {

    const insideCard = (<div className="medium-card" style={{backgroundImage:'linear-gradient(rgba(0,0,0,0) 50%,black), url("'+data.image+'")'}}>
                            <h6>{data.subtitle}</h6>
                            <h5>{data.title}</h5>
                        </div>)

    if (data.internallink){
        return (<Link to={data.internallink}>{insideCard}</Link>)
    } else if (data.externallink) {
        return (<a href={data.externallink} rel="noopener noreferrer" target="_blank">{insideCard}</a>)
    } else {
        return (<>{insideCard}</>)
    }
}

export default MediumCard;