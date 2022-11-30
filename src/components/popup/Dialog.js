import { items, checkboxData, buttonData } from './formItemsData';
import createForm from './createForm';

const Dialog = () => {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('data-id', 'popup');
    dialog.append(createForm(items, checkboxData, buttonData));
    return dialog;
};

export default Dialog;

