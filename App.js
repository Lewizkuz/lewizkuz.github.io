function App(){
    return(
        <>
        <Header/>
        <Navbar/>
        <Article head='Article'>Big stuff going on!</Article>
        <Article head='Another Article'> Even more stuff!</Article>
        <Article head='Articles are taking over!'>Super important stuff right here</Article>
        <Aside/>
        <Footer>
            I am down here! where noone will see me for eternity
        </Footer>    
        </>
    );
}
 function Header() {
    return(
        <header>
            <h1>Title</h1>
            <p>Subtitle</p>
        </header>
    );
};
function Article(props) {
    return(
        <article>
            <h1>{props.head}</h1>
            <p>{props.Children}</p>
        </article>
    );
}
function Aside(props) {
    return(
        <aside>
            <p>This thing is at the side weirdly...</p>
        </aside>
    );
     }
function Navbar() {
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
}
ReactDOM.render(App, document.getElementById('root'));