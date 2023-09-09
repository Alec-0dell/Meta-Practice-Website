function Nav(props) {
    return (
        <nav className="main-nav">
            <ul>
                <li>{props.title}</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;