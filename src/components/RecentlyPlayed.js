import Header from "./Header"
import LatestCard from "./RecentlyPlayedCard"

function RecentlyPlayed(props) {

    let recentlyPlayedElements
    if(props.recentlyPlayed) {
    recentlyPlayedElements = props.recentlyPlayed.map(last => {
        /*let artistsName = last.artists[0].name

        for(let i = 1; i < last.artists.length; i++) {
            //console.log(i + ' ' + last.artists[i].name)
            artistsName += ', ' + last.artists[i].name
        }*/

        return (
            <LatestCard 
                key = {last.track.id} 
                name = {last.track.name}
                //image = {last.album.images[1].url}
                //artist = {artistsName}
            />
        )
    })
    }

    return (
        <div className='recently-played__content-container'>
            <Header 
                userName = {props.userName}
                text = ', these are your recently played songs'
            />
            <div className="recently-played__elements-container">
                {recentlyPlayedElements}
            </div>
        </div>
    )
}

export default RecentlyPlayed