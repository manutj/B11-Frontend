import StarImage from "../images/star.png";
export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card--image" />
            <div className="card--stats">
                <img src={StarImage} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>
                <b className="bold">From ${props.price}</b> / person
            </p>
        </div>
    );
}
