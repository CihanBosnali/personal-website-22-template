import { Link } from "react-router-dom";

const SmallCard = ({data}) => {
    return (
        <Link to={{}} onClick={alert}>
            <div className="small-card" style={{backgroundImage:'url("'+data.image+'")'}}>

            </div>
        </Link>
    )
}

export default SmallCard;