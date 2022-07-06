import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import Section from "../components/Section";

import data from "../data/data.json"

const Homepage = () => {

    const sections = data.sections.map((section) => <Section sectionName={section.name} cards={section.cards}/>) 
    
    return(
        <div className="App">
            <Header name={data.name}/>
            <LargeCard/>
            {sections}
            <Footer/>

        </div>
    )
}

export default Homepage;
