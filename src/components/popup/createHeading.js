const createHeading = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    return title;
};

export default createHeading;
