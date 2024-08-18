import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
const navigate = useNavigate();
const [error, setError] = useState("");
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [verify, setVerify] = useState();

useEffect(() => {
    checkToken();
}, []);

async function login(formData) {
    if (formData.mailUsername && formData.password) {
    setLoading(true);
    try {
        const response = await axios.post(
        process.env.REACT_APP_BACKEND + "/auth/login",
        formData,
        {
            headers: {
            "Content-Type": "application/json",
            },
        }
        );
        localStorage.setItem("token", response.data.token);
        setUser(response.data);
        navigate("/");
        setLoading(false);
        setError("");
    } catch (error) {
        setLoading(false);
        setError("Si è verificato un errore. Ritenta.");
    }
    } else {
    setLoading(false);
    setError("Si è verificato un errore. Ritenta.");
    }
}

async function logout() {
    setLoading(true);
    localStorage.removeItem("token");
    setUser(null);
    setTimeout(() => {
    console.log("text");
    navigate("/");
    setLoading(false);
    }, 1000);
}

async function register(formData, check) {
    if (check && formData.password === formData.confirmPassword) {
    try {
        setLoading(true);
        const response = await axios.post(
        process.env.REACT_APP_BACKEND + "/auth/register",
        formData,
        {
            headers: {
            "Content-Type": "application/json",
            },
        }
        );
        setError("");
        setLoading(false);
        setVerify(true);
    } catch (error) {
        setLoading(false);
        setError("Si è verificato un errore.Ritenta");
    }
    } else {
    setLoading(false);
    setError("Le due password non coincidono");
    }
}

async function profile(formData) {
    if (
    formData.password != "" &&
    formData.password != formData.confirmPassword
    ) {
    setError("Le password non coincidono");
    return;
    }
    if (
    formData.name == "" ||
    formData.surname == "" ||
    formData.username == "" ||
    formData.mail == ""
    ) {
    setError("I dati non corrispondono");
    return;
    }
    try {
    setLoading(true);
    const response = await axios.post(
        process.env.REACT_APP_BACKEND + "/auth/saveUser",
        formData,
        {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        }
    );
    setError("");
    setLoading(false);
    setUser(response.data);
    } catch (error) {
    setLoading(false);
    setError("Si è verificato un errore.Ritenta");
    }
}

async function checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
    setLoading(true);
    try {
        const response = await axios.get(
        process.env.REACT_APP_BACKEND + "/auth/check",
        {
            headers: {
            "Content-Type": "application/json",

            Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }
        );
        setUser(response.data);
        console.log(response.data);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        setUser(null);
    }
    } else {
    setUser(null);
    setLoading(false);
    }
}

return (
    <LoginContext.Provider
    value={{ login, logout, register, loading, user,setUser, error, verify, profile }}
    >
    {children}
    </LoginContext.Provider>
);
}

export default LoginContext;
