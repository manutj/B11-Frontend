import { Children } from "./components";
import { NavBar } from "./components";
import { Poster } from "./components";
import { Card } from "./components";
import Hooks from "./Hooks";
import data from "./data";
function App() {
    // Valores enviados a el componente Children para probar el spread syntax
    const nameOne = "andrea 👱";
    const nameTwo = "Andres 🙍";
    const nameThree = "Carlos 🧔";
    const nameFour = "Monica 🧑‍🦳";

    const cards = data.map((item) => {
        return <Card key={item.id} item={item} />;
    });
    return (
        <div>
            <NavBar />
            <section>
                {" "}
                <Poster />
            </section>
            {/* <Card /> */}
            <section className="cards-list">{cards}</section>

            <Children
                one={nameOne}
                two={nameTwo}
                three={nameThree}
                four={nameFour}
            />

            {/* Componente utilizado para ver algunos trucos de los Hooks de React */}
            <Hooks />
        </div>
    );
}

export default App;
