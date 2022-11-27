import Home from "./components/Home";

const initPageLoad = () => {
    const doc = document.body;
    doc.append(Home());
};

export default initPageLoad;