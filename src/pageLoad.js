import LibraryApp from "./components/LibraryApp";

const initPageLoad = () => {
    const doc = document.body;
    doc.append(LibraryApp());
};

export default initPageLoad;