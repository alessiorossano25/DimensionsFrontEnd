import "./Register.css";
import bgform from "../../assets/login.webp";
import { useContext, useState } from "react";

import LoginContext from "../../Context/LoginContext";

const bgRegister = bgform;

const Register = () => {
const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    mail: "",
    password: "",
    confirmPassword: "",
});
const [viewPassword, setViewPassword] = useState(false);
const [viewConfirmPassword, setConfirmPassword] = useState(false);
const [check, setCheck] = useState(false);
const { register: registerContext, error, verify } = useContext(LoginContext);

async function register(event) {
    event.preventDefault();
    registerContext(formData, check);
}

function change(event) {
    const { name, value } = event.target;
    setFormData({
    ...formData,
    [name]: value,
    });
}

return (
    <div
    className="bodyRegister"
    style={{ backgroundImage: `url(${bgRegister})` }}
    >
    <div className="register-form">
        <form onSubmit={register}>
        <h1>Registrazione</h1>
        <div className="input-box">
            <input
            type="text"
            value={formData.name}
            name="name"
            onChange={change}
            placeholder="Nome"
            required
            />
        </div>

        <div className="input-box">
            <input
            type="text"
            value={formData.surname}
            name="surname"
            onChange={change}
            placeholder="Cognome"
            required
            />
        </div>

        <div className="input-box">
            <input
            type="text"
            value={formData.username}
            name="username"
            onChange={change}
            placeholder="Username"
            required
            />
            <ion-icon name="person"></ion-icon>
        </div>

        <div className="input-box">
            <input
            type="text"
            value={formData.mail}
            name="mail"
            onChange={change}
            placeholder="E-mail"
            required
            />
            <ion-icon name="mail"></ion-icon>
        </div>

        <div className="input-box">
            <input
            type={viewPassword ? "text" : "password"}
            value={formData.password}
            name="password"
            onChange={change}
            placeholder="Password"
            required
            />
            <span onClick={() => setViewPassword(!viewPassword)}>
            <ion-icon name={viewPassword ? "eye" : "eye-off"}></ion-icon>
            </span>
        </div>

        <div className="input-box">
            <input
            type={viewConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={change}
            placeholder="Conferma Password"
            required
            />
            <span onClick={() => setConfirmPassword(!viewConfirmPassword)}>
            <ion-icon
                name={viewConfirmPassword ? "eye" : "eye-off"}
            ></ion-icon>
            </span>
        </div>

        <div className="terms">
            <label>
            <input
                type="checkbox"
                onChange={(event) => setCheck(event.target.checked)}
            />
            Ho letto e accetto i <a href="https://www.iubenda.com/it/help/107242-termini-e-condizioni-sito-web">Termini e condizioni</a> e l'Informativa sulla <a href="https://protezionedatipersonali.it/informativa">Privacy</a>
            </label>
        </div>

        <button
            type="submit"
            disabled={
            formData.name === "" ||
            formData.surname === "" ||
            formData.username === "" ||
            formData.mail === "" ||
            formData.password === "" ||
            formData.confirmPassword === "" ||
            !check
            }
            className="btn"
        >
            Registrati
        </button>

        {error && (
            <div className="error">
            <p>{error}</p>
            </div>
        )}

        {verify && (
            <div className="subcomment">
            <p>Registrazione avvenuta con successo</p>
            </div>
        )}

        <a className="returnToHome" href="/">
            {" "}
            &#8594; Torna alla home
        </a>
        </form>
    </div>
    </div>
);
};

export default Register;
