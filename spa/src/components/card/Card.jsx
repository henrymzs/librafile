import "./card.css";

function Card({ name, valueBook, image, acessibility, variant}) {
    return (
        <div className="card-container">
            <div className={`card-image ${variant}`} >
                <img className="card-image_logo" src={image} alt={acessibility} />
            </div>
            <div className="card-info">
                <h1 className="card-title">{name}</h1>
                <span className="card-number">{valueBook}</span>
            </div>
        </div>
    );
}

export default Card;