import "./authenticationPage.css";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";

const LandingPage = () => {
    const landingPage = document.createElement('div');
    landingPage.classList.add('landing-page');
    landingPage.append(SignUpPage());
    landingPage.append(SignInPage());
    return landingPage;
};

export default LandingPage;