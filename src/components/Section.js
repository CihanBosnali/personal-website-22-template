import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";

const Section = ({sectionName, cards}) => {

    const cardComponents = cards.map((card) => {
        if (card.size == "small") {
            return <SmallCard data={card}/>;
        } else {
            return <MediumCard data={card}/>;
        }
    });

    return (
        <div className="section">
            <h4>{sectionName}</h4>
            <div className="card-deck">
                {cardComponents}
            </div>
        </div>
    )
}

export default Section;