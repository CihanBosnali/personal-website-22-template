import { Link } from "react-router-dom";

const SmallCard = ({data}) => {

    const insideCard = (<div className="small-card" style={{backgroundImage:'url("'+data.image+'")'}}/>)

    if (data.internallink){
        return (<Link to={data.internallink}>{insideCard}</Link>)
    } else if (data.externallink) {
        return (<a href={data.externallink} rel="noopener noreferrer" target="_blank">{insideCard}</a>)
    } else {
        return (<>{insideCard}</>)
    }
}

export default SmallCard;