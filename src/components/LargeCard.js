import { Link } from "react-router-dom";

const LargeCard = ({data}) => {

    const text = data.text.map((paragraph) => <p>{paragraph}</p>)
    return(
        <Link to={{}} onClick={alert}>
            <div className="large-card" style={{backgroundImage:'linear-gradient(to left, rgba(0,0,0,0) 35%,black), url("'+data.image+'")'}}>
                <div className="text-container">
                    {text}
                </div>
            </div>
        </Link>
    )
}

export default LargeCard;