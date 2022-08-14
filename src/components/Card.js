import '../styles/imports/card.scss'

function Card(props) {

    return (
        <div className="card">
            <img src = {props.image} />
            <div className='info-box'>
                <h1>{props.name}</h1>
                <h2>{props.artist}</h2>
            </div>
        </div>
    )
}

export default Card