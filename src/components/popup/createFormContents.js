import {createFormItem, createCheckboxItem, createButtonItem } from './formItemsComponents';

const createFormContents = (items, checkboxData, buttonData) => {
    const formContents = document.createElement('div');
    formContents.classList.add('form-contents');
    
    formContents.append(createFormItem(
        items.item1.errorDataId,
        items.item1.forHtml,
        items.item1.labelClassName,
        items.item1.labelDataId,
        items.item1.labelText,
        items.item1.inputType,
        items.item1.inputClassName,
        items.item1.inputIdName,
        items.item1.inputName,
        items.item1.inputDataId
    ));

    formContents.append(createFormItem(
        items.item2.errorDataId,
        items.item2.forHtml,
        items.item2.labelClassName,
        items.item2.labelDataId,
        items.item2.labelText,
        items.item2.inputType,
        items.item2.inputClassName,
        items.item2.inputIdName,
        items.item2.inputName,
        items.item2.inputDataId
    ));

    formContents.append(createFormItem(
        items.item3.errorDataId,
        items.item3.forHtml,
        items.item3.labelClassName,
        items.item3.labelDataId,
        items.item3.labelText,
        items.item3.inputType,
        items.item3.inputClassName,
        items.item3.inputIdName,
        items.item3.inputName,
        items.item3.inputDataId
    ));

    formContents.append(createCheckboxItem(checkboxData));
    formContents.append(createButtonItem(buttonData));
    return formContents;
};

export default createFormContents;