import createHeading from "./popup/createHeading";

const Header = () => {
    const header = document.createElement('header');
    header.append(createHeading('your library fortress'));
    return header;
};

export default Header;