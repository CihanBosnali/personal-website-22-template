import { Link } from "react-router-dom";

const LargeCard = ({data}) => {

    const text = data.text.map((paragraph) => <p>{paragraph}</p>)

    const insideCard = (<div className="large-card" style={{backgroundImage:'linear-gradient(to left, rgba(0,0,0,0) 35%,black), url("'+data.image+'")'}}>
                            <div className="text-container">
                                {text}
                            </div>
                        </div>
                        )
    
    if (data.internallink){
        return (<Link to={data.internallink}>{insideCard}</Link>)
    } else if (data.externallink) {
        return (<a href={data.externallink} rel="noopener noreferrer" target="_blank">{insideCard}</a>)
    } else {
        return (<>{insideCard}</>)
    }
}

export default LargeCard;