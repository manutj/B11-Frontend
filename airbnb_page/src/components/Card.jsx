import StarImage from "../images/star.png";
function Card(props) {
    return (
        <div className="card">
            {props.item.openSpots === 0 && (
                <div className="card--badge">SOLD OUT</div>
            )}

            {/* CREA UNA VARIABLE QUE CONTENGA UN TEXTO. SI LA PROPIEDAD OPENSPOTS = 0 DEBE DECIR "SOLD OUT", SI LA PROPIEDAD LOCATION = "ONLINE" DEBE DECIR "ONLINE". ESTE TEXTO SOLO DEBE MOSTRARSE SI LA VARIABLE TIENE UN VALOR */}

            {/* En este div se debe mostrar el texto del ejercicio */}
            {/* {<div className="card--badge"></div>} */}
            <img src={props.item.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={StarImage} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">
                    ({props.item.stats.reviewCount}) •{" "}
                </span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p>{props.item.title}</p>
            <p>
                <b className="bold">From ${props.item.price}</b> / person
            </p>
        </div>
    );
}

export { Card };
