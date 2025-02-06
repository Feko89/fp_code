import React, { useState } from "react";
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const API_URL = process.env.REACT_APP_API_URL;

    const handleRegister = async (e) => {
        e.preventDefault();

        // Overenie hesla
        if (formData.password !== formData.confirmPassword) {
            alert("Heslá sa nezhodujú!");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    surname: formData.surname,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                alert("Registrácia bola úspešná!");
            } else {
                alert("Nepodarilo sa zaregistrovať používateľa.");
            }
        } catch (error) {
            console.error("Chyba pri registrácii:", error);
        }
    };

    return (
        <div className="section-1">
            <div className="pozadie-login">
                <div className="Nadpis-login">Registrácia</div>
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label className="form-label">Meno</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Priezvisko</label>
                        <input
                            type="text"
                            className="form-control"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email adresa</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Heslo</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Potvrď Heslo</label>
                        <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Potvrď
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
