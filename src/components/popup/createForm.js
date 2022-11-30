import createHeading from './createHeading';
import createFormContents from './createFormContents';

const createForm = (items, checkboxData, buttonData, headingText='Add new book') => {
    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    form.append(createHeading(headingText));
    form.append(createFormContents(items, checkboxData, buttonData))
    return form;
};

export default createForm;