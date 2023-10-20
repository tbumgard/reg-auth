function MyButton() {
    return (
        <div>
            <button>
                CLICK ME IF YOU THINK WORKEY IS A MORON!!!!
            </button>
        </div>
    );
}

function NameInputField(){
    return (
        <div>
            <label>Username:</label>
            <input type="text" id="username"/>
        </div>
    )
}

function PasswordInputField(){
    return (
        <div>
            <label>Password:</label>
            <input type="password" id="password"/>
        </div>
    )
}

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
