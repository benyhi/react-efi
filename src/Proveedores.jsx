import { useEffect, useState } from "react";
import ModelTable from "./components/ModelTable";

function Proveedores(){
    const [proveedores, setProveedores] = useState([]);
    const orderedCols = ["id","nombre","cuit","telefono","email","direccion"];

    useEffect(()=>{
        fetch('http://localhost:5000/proveedores')
        .then(response => {
            if(!response.ok){
                throw new Error('Error al obtener proveedores')
            }
            return response.json();
        })
        .then(data => setProveedores(data.proveedores))
        .catch(error => console.error('Error:', error));
    },[])
    
return (
    <div>
        <ModelTable data={proveedores} orderedCols={orderedCols}/>
    </div>
);
}

export default Proveedores