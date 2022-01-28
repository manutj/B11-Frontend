//REPASO DE ASPECTOS BASICOS DE REACT

//ESTA ES UNA FORMA DE RENDERIZAR UN ELEMENTO, EN DONDE INDICAMOS QUÉ ES LO QUE QUEREMOS RENDERIZAR Y POSTERIORMENTE EN DÓNDE LO QUEREMOS RENDERIZAR
ReactDOM.render(<h1>Hola a todos!</h1>, document.getElementById("root"));

//LOS COMPONENTES SON FUNCIONES QUE NOS DEVUELVEN UN ELEMENTO, EN ESTE CASO ESTE ES EL MISMO ELEMENTO QUE RENDERIZAMOS ARRIBA, CON LA DIFERENCIA QUE PARA QUE APAREZCA, HAY QUE INVOCAR LA FUNCION EN EL RENDER
function Message() {
    return <h1>Hola a todos!</h1>;
}

// EJERCICIO: RENDERIZAR DENTRO DE UNA LISTA DESORDENADA <UL> 2 ITEMS <LI>.

//COMPONENTE DE UN NAVBAR USANDO JS ES6. EL SENTIDO DE UN COMPONENTE ES SEPARAR LOS ELEMENTOS DE UN INTERFAZ EN PIEZAS INDEPENDIENTES PARA PODER REUTILIZARLAS Y AHORRAR LINEAS DE CODIGO, ADEMÁS DE HACERLO MAS MANTENIBLE Y LEGIBLE
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Features
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Pricing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

//COMPONENTE DE UN H1 USANDO JS VANILLA
function Content() {
    return <h1>Estoy aprendiendo React!</h1>;
}

//PARA RENDERIZAR MÁS DE UN COMPONENTE, ESTOS DEBEN ESTAR DENTRO DE UN ELEMENTO PADRE QUE PUEDE SER UN DIV, UN REACT.FRAGMENT O LAS ETIQUETAS DE APERTURA Y CIERRE <> </>
ReactDOM.render(
    <div>
        <Navbar />
        <Content />
    </div>,
    document.getElementById("root")
);

//EJERCICIO: CREAR UN COMPONENTE QUE RENDERIZE UNA IMAGEN Y COLOCARLA DEBAJO DE EL NAVBAR

//PROGRAMACION IMPERATIVA: LA COMPUTADORA NOS PIDE DESCRIBIRLE TODOS LOS PASOS DE CÓMO HACER ALGO Y ELLA LO HACE

const h1 = document.createElement("h1");
h1.textContent = "Esto es programacion imperativa";
h1.className = "header";
document.getElementById("root").appendChild(h1);

//PROGRAMACION DECLARATIVA: LE INDICAMOS A LA COMPUTADORA QUÉ TIENE QUE HACER Y ELLA LO HACE SIN QUE YO LE INDIQUE CÓMO HACERLO PASO A PASO
ReactDOM.render(
    <h1 className="header">Esto es programacion declarativa</h1>,
    document.getElementById("root")
);

//ES MAS CONVENIENTE LA PROGRAMACIÓN DECLARATIVA, DADO QUE PODEMOS VER QUE HICIMOS LO MISMO PERO CON MUCHAS MENOS LÍNEAS DE CODIGO, VERÍAMOS MUCHO MÁS LA DIFERENCIA SI RENDERIZAMOS ALGO MÁS QUE UN SIMPLE H1 Y ES ALGO CON LO QUE REACT OPTIMIZA MUY BIEN.

//EJERCICIO: CREA UN NAVBAR CON JSX USANDO:

//ETIQUETA NAV COMO PADRE
//UN H1 CON EL NOMBRE DE TU SITIO
//INSERTA UNA LISTA DESORDENADA Y DENTRO DE ELLA AÑADE LOS ITEMS ¨PRECIO¨, ¨ACERCA DE NOSOTROS¨ Y ¨CONTACTO¨
//INVESTIGA COMO AÑADIRLE ESTILOS
