import '../styles/imports/card.scss'

function Card(props) {

    return (
        <div className="card">
            <img src = {props.image} />
            <h1>{props.name}</h1>
            <h2>{props.artist}</h2>
            <h2>{props.album}</h2>
        </div>
    )
}

export default Card