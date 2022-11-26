const createErrorSpan = (errorDataId) => {
    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error');
    errorSpan.setAttribute('data-id', errorDataId);
    return errorSpan;
};

const createLabel = (forHtml, labelClassName, labelDataId, labelText) => {
    const label = document.createElement('label');
    label.classList.add(labelClassName);
    label.setAttribute('for', forHtml);
    label.setAttribute('data-id', labelDataId);
    label.textContent = labelText;
    return label;
};

const createInput = (inputType, inputClassName, inputIdName, inputName, inputDataId) => {
    const input = document.createElement('input');
    input.classList.add(inputClassName);
    input.setAttribute('type', inputType);
    input.setAttribute('id', inputIdName);
    input.setAttribute('data-id', inputDataId);
    input.setAttribute('name', inputName);
    return input;
};

const createFormItem = (
    errorDataId,
    forHtml, 
    labelClassName, 
    labelDataId, 
    labelText, 
    inputType, 
    inputClassName, 
    inputIdName, 
    inputName,
    inputDataId,
    ) => {
    const item = document.createElement('p');
    item.classList.add('input-box');
    item.append(createErrorSpan(errorDataId));
    item.append(createLabel(forHtml, labelClassName, labelDataId, labelText));
    item.append(createInput(inputType, inputClassName, inputIdName, inputName, inputDataId));
    return item;
};

const createCheckboxItem = (checkboxData) => {
    const item = document.createElement('p');
    item.classList.add('read-section');
    item.append(createLabel(
        checkboxData.forHtml,
        checkboxData.labelClassName,
        checkboxData.labelDataId,
        checkboxData.labelText
    ));
    item.append(createInput(
        checkboxData.inputType,
        checkboxData.inputClassName,
        checkboxData.inputIdName,
        checkboxData.inputName,
        checkboxData.inputDataId
    ));
    return item;
};

const createButtonItem = (buttonData) => {
    const item = document.createElement('p');
    item.classList.add('button-area');

    const button = document.createElement('button');
    button.classList.add(buttonData.buttonClassName);
    button.textContent = buttonData.buttonText;
    button.setAttribute('id', buttonData.buttonIdName);
    button.setAttribute('type', buttonData.buttonType);

    item.appendChild(button);
    return item;
};

export { createFormItem, createCheckboxItem, createButtonItem };