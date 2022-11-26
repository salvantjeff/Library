import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Dialog from "./popup/Dialog";
import "../style.css";

const Home = () => {
    const home = document.createElement('div');
    home.classList.add('home-page');
    home.append(Header());
    home.append(Main());
    home.append(Footer());
    home.append(Dialog());
    return home;
};

export default Home;