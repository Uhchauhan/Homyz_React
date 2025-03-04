
import Companies from "./component/Companies/Companies";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import GetStarted from "./component/GetStarted/GetStarted";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Residencies from "./component/Residencies/Residencies";
import Value from "./component/Value/Value";
 
import "./index.css"

function App() {

    return (
        <div className="App">
            <div>
                <Header />
                <Hero />
                <Companies />
                <Residencies />
                <Value />
                <Contact />
                <GetStarted />
                <Footer /> 
            </div>
        </div>
    )
};


export default App;