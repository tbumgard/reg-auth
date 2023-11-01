import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import NameInputField from "./NameInputField";
import PasswordInputField from "./PasswordInputField";

function Login() {
    return (
        <div>
            <h1>Welcome to Rovert's App!</h1>
            <NameInputField/>
            <PasswordInputField/>
            <LoginButton/><RegisterButton/>
        </div>
    );
}

export default Login;
