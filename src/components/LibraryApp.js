import LandingPage from "../landingPage/LandingPage";
import Home from "./Home";

const LibraryApp = () => {
    const library = document.createElement('div');
    library.classList.add('library-app');
    library.append(Home());
    library.append(LandingPage());
    return library;
};

export default LibraryApp;