import Home from "./components/Home";
import LibraryApp from "./components/LibraryApp";

const initPageLoad = () => {
    const doc = document.body;
    // doc.append(Home());
    doc.append(LibraryApp());
};

export default initPageLoad;