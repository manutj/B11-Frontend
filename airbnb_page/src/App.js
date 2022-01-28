import NavBar from "./components/NavBar";
import Poster from "./components/Poster";
import Card from "./components/Card";
import data from "./data";
function App() {
    const cards = data.map((item) => {
        return (
            <Card
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                title={item.title}
                country={item.country}
                price={item.price}
            />
        );
    });
    return (
        <div>
            <NavBar />
            <section>
                <Poster />
            </section>
            {/* <Card /> */}
            <section className="cards-list">{cards}</section>
        </div>
    );
}

export default App;
