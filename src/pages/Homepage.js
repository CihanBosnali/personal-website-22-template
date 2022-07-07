import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import Section from "../components/Section";

import homeData from "../data/homepage.json"

const Homepage = ({name}) => {
    const sections = homeData.sections.map((section) => <Section sectionName={section.name} cards={section.cards}/>);
    
    return(
        <div className="App">
            <Header name={name}/>
            <LargeCard/>
            {sections}
            <Footer/>

        </div>
    )
}

export default Homepage;
