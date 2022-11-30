import googleIcon from "../../images/google_icon.png";

const SignUpWithGoogleButton = () => {
    const button = document.createElement('div');
    button.classList.add('sing-up-with-google');
    const text = document.createElement('p');
    text.textContent = 'Sign up with Google';
    const icon = document.createElement('img');
    icon.setAttribute('src', googleIcon);
    button.appendChild(icon);
    button.appendChild(text);
    return button;
};

const SignInWithGoogleButton = () => {
    const button = document.createElement('div');
    button.classList.add('sing-in-with-google');
    const text = document.createElement('p');
    text.textContent = 'Sign in with Google';
    const icon = document.createElement('img');
    icon.setAttribute('src', googleIcon);
    button.appendChild(icon);
    button.appendChild(text);
    return button;
};

export { SignUpWithGoogleButton, SignInWithGoogleButton };