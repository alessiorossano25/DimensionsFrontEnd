import "./Login.css";
import bgform from "../../assets/login.webp";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { useNavigate } from "react-router-dom";

const bgLogin = bgform;

const Login = () => {
const [formData, setFormData] = useState({
    mailUsername: "",
    password: "",
});

const [viewPassword, setViewPassword] = useState(false);
const {
    login: loginFromContext,
    loading,
    user,
    error,
} = useContext(LoginContext);

const navigate = useNavigate();

useEffect(() => {
    if (!loading && user) {
    navigate("/");
    }
}, [loading, user, error]);


async function login(event) {
    event.preventDefault();
    loginFromContext(formData);
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
    className="bodyLogin"
    style={{ backgroundImage: `url(${bgLogin})` }}
    >
    <div className="login-form">
        <form action="" onSubmit={login}>
        <h1>Accedi</h1>
        <div className="input-box">
            <input
            type="text"
            placeholder="Username / Mail"
            name="mailUsername"
            onChange={change}
            required
            />
            <ion-icon name="person"></ion-icon>
        </div>
        <div className="input-box">
            <input
            type={viewPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={change}
            required
            />
            <span onClick={() => setViewPassword(!viewPassword)}>
            <ion-icon name={viewPassword ? "eye" : "eye-off"}></ion-icon>
            </span>
        </div>

        <button type="submit" className="btn log">
            Login
        </button>

        <div className="register-link">
            <p>
            Non hai un account?
            <a href="/register">
                <span style={{ paddingLeft: "6px" }}></span>Iscriviti
            </a>
            </p>
        </div>

        <a className="returnToHome" href="/">
            {" "}
            &#8594; Torna alla home
        </a>

        {error && (
            <div className="error">
            <p>{error}</p>
            </div>
        )}
        </form>
    </div>
    </div>
);
};

export default Login;
