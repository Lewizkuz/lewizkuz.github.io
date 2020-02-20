import Header from './Components/Header.js';
import Navbar from './Components/Navbar.js';
import Article from './Components/Article.js';
import Aside from './Components/Aside.js';
import Footer from './Components/Footer';
export default function App(){
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