import MyButton from "./MyButton";
import NameInputField from "./NameInputField";
import PasswordInputField from "./PasswordInputField";

function Login() {
    return (
        <div>
            <h1>Welcome to Rovert's App!</h1>
            <NameInputField/>
            <PasswordInputField/>
            <MyButton/>
        </div>
    );
}

export default Login;
