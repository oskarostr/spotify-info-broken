function Header(props) {
    return (
        <header>
            <h1>Hello <span>{props.userName}</span>, this is yours top 20 tracks</h1>
        </header>
    )
}

export default Header