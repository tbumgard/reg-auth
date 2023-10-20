import MyButton from "./MyButton";
import NameInputField from "./NameInputField";
import PasswordInputField from "./PasswordInputField";

function Rovert() {
    return (
        <div>
            <h1>Welcome to Rovert's App!</h1>
            <NameInputField/>
            <PasswordInputField/>
            <MyButton/>
        </div>
    );
}

export default Rovert;
