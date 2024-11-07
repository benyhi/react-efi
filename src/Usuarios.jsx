import { useEffect, useState } from "react";
import ModelTable from "./components/ModelTable";

function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);
    const orderedCols = ["id","nombre_usuario","contrasena_hash", "is_admin"];
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch("http://localhost:5000/usuarios", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    setUsuarios(data.usuarios);
                } else if (response.status === 403) {
                    console.error("No tienes permisos para acceder a esta página.");
                } else {
                    console.error("Error al obtener usuarios");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        if (token) {
            fetchUsuarios();
        } else {
            console.error("No estás autenticado.");
        }
    }, [token]);

return (
    <div>
        <ModelTable data={usuarios} orderedCols={orderedCols}/>
    </div>
);
}

export default Usuarios