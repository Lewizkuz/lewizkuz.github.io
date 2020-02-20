export default function Navbar() {
    navlinks = (
        <>
        <li><a href="NavLink">Link</a></li>
        <li><a href="NavLink">Kink</a></li>
        <li><a href="NavLink">Wink</a></li>
        <li><a href="NavLink">Sink</a></li>
        </>
    )
    return(
        <nav>
            <ul>
                {navlinks}
            </ul>
        </nav>
    );
};
