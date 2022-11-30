class CheckboxItem {
    constructor(
        forHtml, 
        labelClassName, 
        labelText, 
        labelDataId, 
        inputType, 
        inputClassName, 
        inputIdName, 
        inputName,
        inputDataId
    ) {
        this.forHtml = forHtml;
        this.labelClassName= labelClassName;
        this.labelText= labelText;
        this.labelDataId= labelDataId;
        this.inputType= inputType;
        this.inputClassName= inputClassName;
        this.inputIdName= inputIdName;
        this.inputName= inputName;
        this.inputDataId= inputDataId; 
    }
};

const checkboxData= new CheckboxItem(
    'read',
    'read',
    'Have read it?',
    '',
    'checkbox',
    'read',
    'read',
    'read',
    '',
);

class ButtonItem {
    constructor (buttonType, buttonIdName, buttonClassName, buttonText) {
        this.buttonType = buttonType;
        this.buttonIdName = buttonIdName;
        this.buttonClassName = buttonClassName;
        this.buttonText = buttonText;
    }
};

const buttonData = new ButtonItem(
    'submit',
    'addBook',
    'add-book',
    'Submit',
);

class Item {
    constructor(
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
    ) {
        this.errorDataId = errorDataId;
        this.forHtml= forHtml;
        this.labelClassName= labelClassName;
        this.labelDataId= labelDataId;
        this.labelText= labelText;
        this.inputType= inputType;
        this.inputClassName= inputClassName; 
        this.inputIdName= inputIdName;
        this.inputName= inputName;
        this.inputDataId= inputDataId;
    }
}

const items = {
    item1: new Item(
        'title',
        'title',
        'plc-holder',
        'title',
        'Title',
        'text',
        'regular',
        'title',
        'title',
        'title'
    ),
    item2: new Item(
        'author',
        'author',
        'plc-holder',
        'author',
        'Author',
        'text',
        'regular',
        'author',
        'author',
        'author'
    ),
    item3: new Item(
        'pages',
        'pages',
        'plc-holder',
        'pages',
        'Total pages',
        'number',
        'regular',
        'pages',
        'pages',
        'pages'
    ),
};

export { items, checkboxData, buttonData };