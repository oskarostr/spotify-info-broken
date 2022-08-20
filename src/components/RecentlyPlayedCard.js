import '../styles/imports/recently-played-card.scss'

function LatestCard(props) {
    return (
        <div className="recently-played__card">
            <div className="info-box">
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default LatestCard