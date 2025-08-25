import "./Card.css";
function Card({title,Icon})
{     
    return (
        <div className="card">
             {Icon && <Icon size={40} style={{ marginBottom: "10px" }} />}
            <h4>{title}</h4>
        </div>
    )

}
export default Card;