import { useEffect, useState } from "react";
import ModelTable from "./components/ModelTable";

function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/usuarios')
        .then(response => {
            if(!response.ok){
                throw new Error('Error al obtener los usuarios')
            }
            return response.json();
        })
        .then(data => setUsuarios(data.usuarios))
        .catch(error => console.error('Error:', error));
    },[])

return (
    <div>
        <ModelTable data={usuarios}/>
    </div>
);
}

export default Usuarios