import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token); // Uloží token do localStorage
                navigate("/notes"); // Presmeruje na poznámky
            } else {
                setErrorMessage("Nesprávne prihlasovacie údaje");
            }
        } catch (error) {
            console.error("Chyba pri prihlasovaní:", error);
            setErrorMessage("Nastala chyba. Skúste to znova neskôr.");
        }
    };

    return (
        <div className="section-1">
            <div className="pozadie-login">
                <div className="Nadpis-login">Prihlás sa</div>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email adresa
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Heslo
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Zapamätať si ma
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Prihlásiť sa
                    </button>
                </form>
                <div className="registruj-section">
                    <p>
                        Nemáš účet?{" "}
                        <Link to="/register" className="registruj-link">
                            Zaregistruj sa
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
