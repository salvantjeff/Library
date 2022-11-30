const Footer = () => {
    const footer = document.createElement('footer');
    const footerContents = document.createElement('p');
    footerContents.textContent = 'Copyright © 2022 salvantjeff';
    footer.appendChild(footerContents);
    return footer;
};

export default Footer;