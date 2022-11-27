import createHeading from "./popup/createHeading";

const logOutButton = () => {
    const button = document.createElement('button');
    button.classList.add('log-out_button');
    button.textContent = 'Log out';
    return button;
};

const Header = () => {
    const header = document.createElement('header');
    header.append(createHeading('your library fortress'));
    header.append(logOutButton());
    return header;
};

export default Header;