import '../styles/imports/header.scss'

function Header(props) {
    return (
        <header>
            <h1>Hello <span>{props.userName}</span>, these are your top 20 tracks</h1>
        </header>
    )
}

export default Header