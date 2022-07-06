import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import Section from "../components/Section";

const Homepage = () => {

    return(
        <div className="App">
            <Header name="Name Surname"/>
            <LargeCard/>
            <Section sectionName="Education" cards={["1","2"]}/>
            <Section sectionName="Projects" cards={["1","2","3","4"]}/>
            <Section sectionName="Contact and Social Media" cards={["1","2"]}/>


        </div>
    )
}

export default Homepage;
