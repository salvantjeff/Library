import "./authenticationPage.css";
import SignUpPage from "./SignUpPage";

const LandingPage = () => {
    const landingPage = document.createElement('div');
    landingPage.classList.add('landing-page');
    landingPage.append(SignUpPage());
    return landingPage;
};

export default LandingPage;