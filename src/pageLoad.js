import Header from "./components/Header";
import Main from "./components/Main";
import Dialog from "./components/popup/Dialog";
import Footer from "./components/Footer";
import "./style.css";

const initPageLoad = () => {
    const doc = document.body;
    doc.append(Header());
    doc.append(Dialog());
    doc.append(Main());
    doc.append(Footer());
};

export default initPageLoad;