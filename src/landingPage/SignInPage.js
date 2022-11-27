const InputItem = (input, label, htmlFor, text) => {
    const item = document.createElement('p');
    item.classList.add('input-item');
    item.append(label(htmlFor, text));
    item.append(input());
    return item;
}

const Label = (htmlFor, text) => {
    const label = document.createElement('label');
    label.setAttribute('for', `${htmlFor}`);
    label.textContent = text;
    return label;
}

const Email = () => {
    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('id', 'sign-in_email');
    email.setAttribute('placeholder', 'thor@gmail.com');
    email.setAttribute('required', 'true');
    return email;
}

const Password = () => {
    const pwd = document.createElement('input');
    pwd.setAttribute('type', 'password');
    pwd.setAttribute('id', 'sign-in_pwd');
    pwd.setAttribute('placeholder', '6+ characters')
    return pwd;
}

const submitButton = () => {
    const button = document.createElement('button');
    button.textContent = 'Sign In';
    button.setAttribute('type', 'submit');
    button.classList.add('sign-in_button');
    return button;
}

const buttonItem = (button) => {
    const item = document.createElement('div');
    item.classList.add('button-item');
    item.append(button());
    return item;
}

const createTitle = (headerLevel, text) => {
    let title;
    if (headerLevel >= 1 && headerLevel <= 6) {
        title = document.createElement(`h${headerLevel}`);
    } else {
        title = document.createElement('h1');
    }
    title.classList.add('sign-in_title');
    title.textContent = text;
    return title;
}

const SignInForm = () => {
    const form = document.createElement('form');
    form.classList.add('sign-in_form');
    form.append(InputItem(Email, Label, 'sign-in_email', 'Email'));
    form.append(InputItem(Password, Label, 'sign-in_pwd', 'Password'));
    form.append(buttonItem(submitButton));
    form.append(createSignUp());
    return form;
};

const createAuthConnections = () => {
    const connections = document.createElement('div');
    connections.classList.add('auth-connections');
    const google = document.createElement('div');
    google.textContent = 'sign in with google';
    connections.append(google);
    return connections;
}

const createDivider = () => {
    const divider = document.createElement('hr');
    divider.classList.add('divider');
    return divider;
}

const createSignUp = () => {
    const signInChoice = document.createElement('p');
    signInChoice.classList.add('sign-up_choice');
    const link = document.createElement('a');
    link.classList.add('sign-up_link');
    link.textContent = 'Sign up now';
    link.setAttribute('href', '#');
    signInChoice.textContent = `Not a member? `;
    signInChoice.appendChild(link);
    return signInChoice;
}

const createAuthContent = () => {
    const authContent = document.createElement('div');
    authContent.classList.add('sign-in_auth_content');
    authContent.append(createTitle(2, 'Sign in to continue'));
    authContent.append(createAuthConnections());
    authContent.append(createDivider());
    authContent.append(SignInForm());

    return authContent;
}

const SignInPage = () => {
    const page = document.createElement('div');
    page.classList.add('sign-in_page');
    page.classList.add('hide');
    page.append(createAuthContent());
    return page;
}

export default SignInPage;