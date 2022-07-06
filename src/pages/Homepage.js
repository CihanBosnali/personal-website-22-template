import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import Section from "../components/Section";

const Homepage = () => {

    return(
        <div className="App">
            <Header name="Name Surname"/>
            <LargeCard/>
            <Section sectionName="Education" cards={["1","2"]}/>
        </div>
    )
}

export default Homepage;
