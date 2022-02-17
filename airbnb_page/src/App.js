// import { Children } from "./components";
// import { NavBar } from "./components";
// import { Poster } from "./components";
// import { Card } from "./components";
// import useStateHook from "./hooks/useStateHook";
import UseEffectHook from "./hooks/useEffect";
// import data from "./data";
function App() {
    // Valores enviados a el componente Children para probar el spread syntax
    // const nameOne = "andrea 👱";
    // const nameTwo = "Andres 🙍";
    // const nameThree = "Carlos 🧔";
    // const nameFour = "Monica 🧑‍🦳";

    // const cards = data.map((item) => {
    //     return <Card key={item.id} item={item} />;
    // });
    return (
        <div>
            {/* <NavBar /> */}
            <section> {/* <Poster /> */}</section>
            {/* <Card /> */}
            {/* <section className="cards-list">{cards}</section> */}

            {/* <Children
                one={nameOne}
                two={nameTwo}
                three={nameThree}
                four={nameFour}
            /> */}

            {/* Componentes utilizados para ver algunos trucos de los Hooks de React */}
            {/* <useStateHook /> */}
            <UseEffectHook id={3} />
        </div>
    );
}

export default App;
