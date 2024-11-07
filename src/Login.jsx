import React, { useState } from 'react';

function Login() {
    const [nombre_usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre_usuario, contrasena }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data)
                localStorage.setItem("token",data.Token);
                alert("Login exitoso")
            } else {
                alert("Login fallido")
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }; 

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={nombre_usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" />
            <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Contraseña" />
            <button type="submit">Iniciar Sesion</button>
        </form>
    );
}

export default Login;
