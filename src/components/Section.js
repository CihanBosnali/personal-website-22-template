import MediumCard from "./MediumCard";

const Section = ({sectionName, cards}) => {

    const cardComponents = cards.map((card) => <MediumCard key={card}/>);

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